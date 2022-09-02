const Router = require("express").Router()
const controller = require("../controllers/ProfileController")
const middleware = require("../middleware")

Router.get(
  "/session",
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
)

Router.get("/get-profiles", controller.GetProfiles)
Router.get("/:profile_id", controller.GetProfileById)
Router.post("/new-profile", controller.CreateProfile)
Router.put("/:profile_id", controller.UpdateProfile)
Router.delete("/:profile_id", controller.DeleteProfile)

Router.post("/register-profile", controller.SignUp)
Router.post("/login", controller.SignIn)
module.exports = Router
