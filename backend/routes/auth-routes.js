import authController from '../controllers/auth-controller.js';
import authMiddleware from '../middlewares/auth-middleware.js';

import express from 'express';

const authRouter = express.Router();




const checkLogin = authMiddleware.loginValidator;
const checkPass = authMiddleware.passValidator;
authRouter.post("/login", checkLogin, checkPass, authController.login);
authRouter.post("/registration", authController.registration);

export default authRouter;