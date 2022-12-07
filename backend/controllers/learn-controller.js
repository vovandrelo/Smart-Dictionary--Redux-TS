//import dictionaryModel from "../models/dictionary-model.js";
import learnModel from "../models/learn-model.js";

class LearnController {
    async getRandomWords(req, res) {
        const { id, login, role } = req.user;
        const getWordsResult = await learnModel.getRandomWords(id);
        
        if (getWordsResult.error) {
            return res.status(400).json(getWordsResult);
        } else {
            return res.status(200).json(getWordsResult)
        }
    }
}

export default new LearnController();