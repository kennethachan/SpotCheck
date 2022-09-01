const { Borough } = require("../models")

const GetBoroughs = async (req, res) => {
  try {
    const boroughs = await Borough.findAll()
    res.send(boroughs)
  } catch (error) {
    throw error
  }
}

const CreateBorough = async (req, res) => {
  try {
    const newBorough = await new Borough(req.body)
    await newBorough.save()
    res.send(newBorough)
  } catch (error) {
    throw error
  }
}

const UpdateBorough = async (req, res) => {
  try {
    let boroughId = parseInt(req.params.borough_id)
    let updatedBorough = await Borough.update(req.body, {
      where: { id: boroughId },
      returning: true,
    })
    res.send(updatedBorough)
  } catch (error) {
    throw error
  }
}

const DeleteBorough = async (req, res) => {
  let boroughId = parseInt(req.params.borough_id)
  await Borough.destroy({ where: { id: boroughId } })
  res.send({ message: `Deleted profile with an id of ${boroughId}` })
  try {
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetBoroughs,
  CreateBorough,
  UpdateBorough,
  DeleteBorough,
}
