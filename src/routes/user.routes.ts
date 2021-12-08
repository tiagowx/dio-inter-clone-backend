import { Router } from "express";
import { UserController } from "../resources/user/user.controllers";

const userRouter = Router();
const userController = new UserController();
// POST
userRouter.post('/signin', userController.signin)
userRouter.post('/signup', userController.signup)

// PUT

// DELETE


export default userRouter;