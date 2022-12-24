import pool from "../db.js";
import { __dirname, __filename } from "../app.js";


class DictionaryModel {
    async getUserWords(userId) {
        try {
            const queryText = 'SELECT * FROM USER_WORDS WHERE id_user=$1 ORDER BY date_added DESC';
            const queryParams = [userId];
            const words = (await pool.query(queryText, queryParams)).rows;
            return { error: false, message: "The user is not registered yet", words }
        } catch (error) {
            return { error: true, message: "Something went wrong..." }
        }
    }
    async addNewWord(userId, wordData) {
        try {
            const queryText = 'INSERT INTO USER_WORDS(id_user, translations, value, examples, stage, next_repeat, date_added) VALUES ($1, $2, $3, $4, $5, $6, $7)';
            const queryParams = [userId, wordData.translations, wordData.value, wordData.examples, 0, new Date(), new Date()];
            const addWordResult = (await pool.query(queryText, queryParams)).rows;
            return { error: false, message: "The word has been added successfully" }
        } catch (error) {
            return { error: true, message: "Something went wrong..." }
        }
    }
    async editWord(userId, wordData) {
        try {
            const queryText = "UPDATE user_words SET value=$1, translations=$2, examples=$3, stage=$4, next_repeat=$5, date_added=$6 WHERE id=$7 AND id_user=$8";
            const queryParams = [wordData.value, wordData.translations, wordData.examples, 0, new Date(), new Date(), wordData.id, userId];
            const editWordResult = (await pool.query(queryText, queryParams)).rowCount;

            const wordIsEdit = editWordResult > 0 ? true : false;

            if (wordIsEdit) {
                return { error: false, message: "The word has been successfully changed" }
            } else {
                return { error: true, message: "Something went wrong..." }
            }
        } catch (error) {
            return { error: true, message: "Something went wrong..." }
        }
    }
    async deleteWord(userId, wordId) {
        try {
            const queryText = "DELETE FROM user_words WHERE id=$1 AND id_user=$2";
            const queryParams = [wordId, userId];
            const deleteWordResult = (await pool.query(queryText, queryParams)).rowCount;

            const wordIsDelete = deleteWordResult > 0 ? true : false;

            if (wordIsDelete) {
                return { error: false, message: "The word was successfully deleted" }
            } else {
                return { error: true, message: "Something went wrong..." }
            }
        } catch (error) {
            return { error: true, message: "Something went wrong..." }
        }
    }
}

export default new DictionaryModel();