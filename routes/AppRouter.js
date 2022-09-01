const Router = require("express").Router()
const BoroughRouter = require("./BoroughRouter")
const PostRouter = require("./PostRouter")
const ProfileRouter = require("./ProfileRouter")

Router.use("/boroughs", BoroughRouter)
Router.use("/posts", PostRouter)
Router.use("/profiles", ProfileRouter)
module.exports = Router

module.exports = Router
