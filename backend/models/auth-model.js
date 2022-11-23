import pool from "../db.js";
import { __dirname, __filename } from "../app.js";


class AuthModel {
    async checkingForExistence(login, email) {
        try {
            const queryText = "SELECT * FROM users WHERE login = $1 OR email = $2";
            const queryParams = [login, email];

            const user = (await pool.query(queryText, queryParams)).rows;

            const isExist = user.length !== 0;

            if (isExist) {
                return { error: true, message: "The user is already registered" }
            } else {
                return { error: false, message: "The user is not registered yet" }
            }
        } catch (error) {
            return { error: true, message: "Something went wrong..." }
        }
    }

    async getUser(login) {
        try {
            const queryText = "SELECT * FROM users WHERE login = $1";
            const queryParams = [login];

            const user = (await pool.query(queryText, queryParams)).rows;

            if (user.length === 0) {
                return { error: true, message: "The user does not exist" }
            } else {
                return { error: false, message: "User received", user: user[0] }
            }
        } catch (error) {
            return { error: true, message: "Something went wrong..." }
        }
    }

    async registration(user) {
        try {
            const { name, login, email, role, pass } = user;
            const queryText = "INSERT INTO users (name, login, email, role, pass) VALUES ($1, $2, $3, $4, $5);";
            const queryParams = [name, login, email, role, pass];

            await pool.query(queryText, queryParams);

            return { error: false, message: "The user has been successfully registered" }
        } catch (error) {
            return { error: true, message: "Something went wrong..." }
        }
    }

    async login(userData) {
        try {
            
        } catch (error) {
            return { error: true, message: "Something went wrong..." }
        }
    }
}

export default new AuthModel();