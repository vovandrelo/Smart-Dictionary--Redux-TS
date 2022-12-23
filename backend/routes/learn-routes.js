import express from 'express';
import learnController from '../controllers/learn-controller.js';
import authMiddleware from '../middlewares/auth-middleware.js';
const learnRouter = express.Router();

const checkJWT = authMiddleware.checkJWT;

learnRouter.get("/get-random-words", checkJWT, learnController.getRandomWords);
learnRouter.put("/update-status-words", checkJWT, learnController.updateStatusWords);

export default learnRouter;