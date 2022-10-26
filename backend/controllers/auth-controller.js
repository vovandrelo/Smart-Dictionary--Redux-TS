import bcrypt from "bcrypt";


import authModel from "../models/auth-model.js";

class AuthController {
    async login(req, res) {
        
    }
    async registration(req, res) {
        const { login, pass, name, email } = {...req.body};

        const checkResult = await authModel.checkUserLogin(login);

        if (checkResult.error) {
            return res.status(400).json(checkResult)
        }

        const passHash = await bcrypt.hash(pass, 10);

        const newUser = {
            name,
            login,
            email,
            pass: passHash,
            role: "user",
        }

        const regResult = await authModel.registration(newUser);

        if (regResult.error) {
            return res.status(400).json(regResult);
        }

        res.status(200).json(regResult);
    }
}

export default new AuthController();