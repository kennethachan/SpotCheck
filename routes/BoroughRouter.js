const Router = require("express").Router()
const controller = require("../controllers/BoroughController")

Router.get("/get-boroughs", controller.GetBoroughs)
Router.post("/new-borough", controller.CreateBorough)
Router.put("/:borough_id", controller.UpdateBorough)
Router.delete("/:borough_id", controller.DeleteBorough)

module.exports = Router
