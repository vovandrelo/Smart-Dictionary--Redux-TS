import pool from "../db.js";
import { __dirname, __filename } from "../app.js";


class DictionaryModel {
    async getUserWords(userId) {
        try {
            const queryText = 'SELECT * FROM "user-words"';
            const words = (await pool.query(queryText)).rows;
            return { error: false, message: "The user is not registered yet", words }
        } catch (error) {
            return { error: true, message: "Something went wrong..." }
        }
    }
    async addNewWord(userId, wordData) {
        try {
            const queryText = 'INSERT INTO "user-words"("id-user", "rus-value", "eng-value", "example", "stage", "next-repeat", "date-added") VALUES ($1, $2, $3, $4, $5, $6, $7)';
            const queryParams = [userId, wordData.translations, wordData.value, wordData.examples, 0, new Date(), new Date()];
            const addWordResult = (await pool.query(queryText, queryParams)).rows;
            return { error: false, message: "The word has been added successfully" }
        } catch (error) {
            return { error: true, message: "Something went wrong..." }
        }
    }
}

export default new DictionaryModel();