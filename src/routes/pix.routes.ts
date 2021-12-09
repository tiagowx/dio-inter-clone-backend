import { Router } from "express";

import userAuthenticated from "../middlewares/userAuthenticated";

const pixRouter = Router();

pixRouter.use(userAuthenticated)

// POST

//userRouter.post('/signin', pixController.signin)
//userRouter.post('/signup', pixController.signup)



export default pixRouter;