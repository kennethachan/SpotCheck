const { Profile, Post } = require("../models")
const middleware = require("../middleware")
const { Op } = require("sequelize")
const jwt = require("jsonwebtoken")

const SignUp = async (req, res) => {
  try {
    const { email, password, userName, image } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const profile = await Profile.create({
      email,
      password,
      userName,
      image,
    })

    res.send(profile)
  } catch (error) {
    throw error
  }
}

const SignIn = async (req, res) => {
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
        userName: profile.userName,
        email: profile.email,
        city: profile.city,
        isHunter: profile.isHunter,
        profileId: profile.profileId,
      }

      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: "Error", msg: "Unauthorized - Login Issue" })
  } catch (error) {
    throw error
  }
}

const CheckSession = async (req, res) => {
  const profileData = jwt.verify(res.locals.token, process.env.APP_SECRET)
  const profile = await Profile.findByPk(profileData.id)
  let payload = {
    id: profile.id,
    email: profile.email,
    userName: profile.userName,
    image: profile.image,
  }
  let token = middleware.createToken(payload)
  res.send({ user: payload, token })
}

const GetProfiles = async (req, res) => {
  try {
    const profiles = await Profile.findAll({
      include: [
        {
          model: Post,
          attributes: [
            "name",
            "image",
            "description",
            "bustLevel",
            "address",
            "boroughId",
          ],
        },
      ],
    })
    res.send(profiles)
  } catch (error) {
    throw error
  }
}

const GetProfileById = async (req, res) => {
  try {
    const profile = await Profile.findByPk(req.params.profile_id, {
      include: [
        {
          model: Post,
          attributes: [
            "name",
            "image",
            "description",
            "bustLevel",
            "address",
            "boroughId",
          ],
        },
      ],
    })
    res.send(profile)
  } catch (error) {
    throw error
  }
}

const CreateProfile = async (req, res) => {
  try {
    const newProfile = await new Profile(req.body)
    await newProfile.save()
    res.send(newProfile)
  } catch (error) {
    throw error
  }
}

const UpdateProfile = async (req, res) => {
  try {
    let profileId = parseInt(req.params.profile_id)
    let updatedProfile = await Profile.update(req.body, {
      where: { id: profileId },
      returning: true,
    })
    res.send(updatedProfile)
  } catch (error) {
    throw error
  }
}

const DeleteProfile = async (req, res) => {
  let profileId = parseInt(req.params.profile_id)
  await Profile.destroy({ where: { id: profileId } })
  res.send({ message: `Deleted profile with an id of ${profileId}` })
  try {
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetProfiles,
  GetProfileById,
  CreateProfile,
  UpdateProfile,
  DeleteProfile,
  SignUp,
  SignIn,
  CheckSession,
}
