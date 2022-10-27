import Jwt from "jsonwebtoken";
import { KEY } from "../config.js";


class AuthMiddleware {
    checkJWT(req, res, next) {
        const token = req.header.authorization.split(" ")[1];
        console.log(Jwt.verify("dsdsds", KEY));
        if (token && Jwt.verify(token, KEY)) {
            // const { id, login, role } = Jwt.verify(token, KEY);
            // req.user = { id, login, role }
            // next()

        } else {
            res.status(403).json({error: true, message: "Authorization error"})
        }
    }
    loginValidator(req, res, next) {
        console.log("Валидация логина запущена!");
        console.log(req.body);
        const { login } = req.body;

        // ^A - если начало строки начинается с А, то true
        // [^] - если 
        // A$ - если конец строки А, то true
        //
        //
        //

        const reg = /^[\w\d].+[\w\d]$/;                      // Создали регулярное выражение
        const test = reg.test(login);           // Используем метод test
        return res.status(403).json({error: true, isValid: test})
        
    }
    emailValidator(req, res, next) {
        return res.status(403).json({error: true, message: "test"})
    }
    passValidator(req, res, next) {
        return res.status(403).json({error: true, message: "test"})
    }

}

export default new AuthMiddleware();
