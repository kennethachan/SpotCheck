const Router = require("express").Router()
const controller = require("../controllers/PostController")

Router.get("/get-posts", controller.GetPosts)
Router.get("/:post_id", controller.GetPostById)
Router.get("/:borough_id", controller.GetPostsByBoroughId)
Router.post("/new-post", controller.CreatePost)
Router.put("/:post_id", controller.UpdatePost)
Router.delete("/:post_id", controller.DeletePost)

module.exports = Router
