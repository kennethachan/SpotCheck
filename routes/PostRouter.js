const Router = require("express").Router()
const controller = require("../controllers/PostController")

Router.get("/get-posts", controller.GetPosts)
Router.get("/get-post", controller.GetPostById)
Router.get("/get-posts/:borough_id", controller.GetPostsByBoroughId)
Router.post("/new-posts", controller.CreatePost)
Router.put("/:post_id", controller.UpdatePost)
Router.delete("/:post_id", controller.DeletePost)

module.exports = Router
