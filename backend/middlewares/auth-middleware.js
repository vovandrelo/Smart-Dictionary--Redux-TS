import Jwt from "jsonwebtoken";
import { KEY } from "../config.js";

class AuthMiddleware {
    checkJWT(res, req, next) {
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
    loginValidator(res, req, next) {
        
    }
    emailValidator(res, req, next) {
        
    }
    passValidator(res, req, next) {
        
    }

}

export default new AuthMiddleware();
