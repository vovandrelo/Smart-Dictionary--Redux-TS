import pool from "../db.js";
import { __dirname, __filename } from "../app.js";


class AuthModel {
    async checkUserLogin(login) {
        try {
            const queryText = "SELECT * FROM users WHERE login = $1";
            const queryParams = [login];

            const user = (await pool.query(queryText, queryParams)).rows;

            const isExist = user.length !== 0;

            if (isExist) {
                return { error: true, message: "The user is already registered" }
            }

            return { error: false, message: "The user is not registered yet" }
        } catch (error) {
            return { error: true, message: "Something went wrong..." }
        }
        
    }

    async getUser() {

    }

    async registration(user) {
        try {
            const { name, login, email, role, pass } = user;
            const queryText = "INSERT INTO users (name, login, email, role, pass) VALUES ($1, $2, $3, $4, $5);";
            const queryParams = [name, login, email, role, pass];

            await pool.query(queryText, queryParams);

            return { error: false, message: "The user has been successfully registered" }
        } catch (error) {
            return { error: true, message: "User with this username or email already exists" }
        }
        
    }
}

export default new AuthModel();