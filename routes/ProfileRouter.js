const Router = require("express").Router()
const controller = require("../controllers/ProfileController")

Router.get("/get-profiles", controller.GetPosts)
Router.get("/get-profile", controller.GetPostById)
Router.post("/new-profiles", controller.CreatePost)
Router.put("/:profile_id", controller.UpdatePost)
Router.delete("/:profile_id", controller.DeletePost)

module.exports = Router
