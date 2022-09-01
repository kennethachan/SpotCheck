const { Profile } = require("../models")
const middleware = require("../middleware")

const Login = async (req, res) => {
  try {
    const profile = await Profile.findOne({
      where: { userName: req.body.userName },
      raw: true,
    })

    if (
      profile &&
      (await middleware.comparePassword(
        profile.passwordDigest,
        req.body.password
      ))
    ) {
      let payload = {
        id: profile.id,
        email: profile.email,
        userName: profile.userName,
        image: profile.image,
      }

      let token = middleware.createToken(payload)
      return res.send({ profile: payload, token })
    }
    res.status(401).send({ status: "Error", msg: "Unauthorized - Login Issue" })
  } catch (error) {
    throw error
  }
}

const Register = async (req, res) => {
  try {
    const { email, password, userName, image } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const user = await Profile.create({
      email,
      passwordDigest,
      userName,
      image,
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const UpdatePassword = async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } })
    if (
      user &&
      (await middleware.comparePassword(
        user.dataValues.passwordDigest,
        req.body.oldPassword
      ))
    ) {
      let passwordDigest = await middleware.hashPassword(req.body.newPassword)

      await user.update({ passwordDigest })
      return res.send({ status: "Success", msg: "Password Updated" })
    }
    res.status(401).send({ status: "Error", msg: "Invalid Credentials" })
  } catch (error) {
    throw error
  }
}

module.exports = {
  Login,
  Register,
  UpdatePassword,
}
