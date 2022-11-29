import express from 'express';
import dictionaryController from '../controllers/dictionary-controller.js';
import authMiddleware from '../middlewares/auth-middleware.js';
const dictionaryRouter = express.Router();

const checkJWT = authMiddleware.checkJWT;

dictionaryRouter.get("", checkJWT, dictionaryController.getWords);
dictionaryRouter.post("/addWord", checkJWT, dictionaryController.addWord);
dictionaryRouter.delete("/deleteWord", dictionaryController.deleteWord);
dictionaryRouter.put("/editWord/:id", checkJWT, dictionaryController.editWord);
dictionaryRouter.post("/search/:value", dictionaryController.searchWord);

export default dictionaryRouter;