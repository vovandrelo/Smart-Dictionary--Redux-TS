import dictionaryModel from "../models/dictionary-model.js";

class DictionaryController {
    async getWords(req, res) {
        const { id, login, role } = req.user;
        const getWordsResult = await dictionaryModel.getUserWords(id);
        if (getWordsResult.error) {
            return res.status(400).json(getWordsResult);
        } else {
            return res.status(200).json(getWordsResult)
        }
    }
    async addWord(req, res) {
        const { id, login, role } = req.user;
        const word = req.body;
        const addWordResult = await dictionaryModel.addNewWord(id, word);
        if (addWordResult.error) {
            return res.status(400).json(addWordResult);
        } else {
            return res.status(200).json(addWordResult);
        }
    }
    async deleteWord(req, res) {
        const { id, login, role } = req.user;
        const wordId = req.params.id;
        const deleteWordResult = await dictionaryModel.deleteWord(id, wordId);

        if (deleteWordResult.error) {
            return res.status(400).json(deleteWordResult);
        } else {
            return res.status(200).json(deleteWordResult)
        }
    }
    async editWord(req, res) {
        const { id, login, role } = req.user;
        const word = req.body;
        const editWordResult = await dictionaryModel.editWord(id, word);

        if (editWordResult.error) {
            return res.status(400).json(editWordResult);
        } else {
            return res.status(200).json(editWordResult)
        }
    }
    async searchWord(req, res) {
        
    }
}

export default new DictionaryController();