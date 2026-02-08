import express from "express"
import { UserController } from "../controllers/user.controller"

const userController = new UserController()
const userRoutes = express.Router()

userRoutes.get("/", userController.getAllStates)
userRoutes.get("/:id/lgas", userController.getAllLgasByState)

export default userRoutes 