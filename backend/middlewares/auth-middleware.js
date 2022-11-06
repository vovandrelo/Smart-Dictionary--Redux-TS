import Jwt from "jsonwebtoken";
import { KEY } from "../config.js";

class AuthMiddleware {
    checkJWT(req, res, next) {
        const token = req.header.authorization.split(" ")[1];
        console.log(Jwt.verify("Проверка JWT", KEY));
        /* if (token && Jwt.verify(token, KEY)) {
            const { id, login, role } = Jwt.verify(token, KEY);
            req.user = { id, login, role }
            next()

        } else {
            res.status(403).json({error: true, message: "Authorization error"})
        } */
    }
    loginValidator(req, res, next) {
        // Извлечение логина из запроса:
        const { login } = req.body.data;

        // Ошибка при валидации возникнет в случае, если выполнится хотя бы одно условие:
        // Условие №1 - Первым символом будет любой символ кроме буквы: (^[^a-zA-Z]);
        // Условие №2 - Будут использоваться символы кроме буквы, чисел и "-": ([^a-zA-Z0-9-];
        // Условие №3 - Будет использован символ "--": (--)
        // Условие №4 - Последним символом будет любом символ кроме буквы: ([^a-zA-Z]$)
        const reg = /(^[^a-zA-Z])|([^a-zA-Z0-9-])|(--)|([^a-zA-Z]$)/;
        const isErrorCheck = reg.test(login);

        // Если логин по какой-то причине не был передан
        // Или длина логина меньше 5 символов
        // Или возникла ошибка валидации, то:
        if (!login || login.length < 5 || isErrorCheck) {
            // Высылаем на клиент ошибку валидации:
            return res.status(400).json({ error: true, message: "The login is incorrect"});
        // Если ошибок при проверке логина выявлено не было, то запускаем следующую middleware():
        } else {
            next();
        }
    }
    emailValidator(req, res, next) {
        // Извлечение email из запроса:
        const { email } = req.body.data;

        // Ошибка при валидации возникнет, если email не будет удовлетворять заданному шаблону:
        // "@<хотя бы одна любая буква или число>.<хотя бы одна любая буква или число>"
        const reg = /@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/;
        const isErrorCheck = !reg.test(email);

        // Если email по какой-то причине не был передан
        // Или длина email меньше 7 символов
        // Или возникла ошибка валидации, то:
        if (!email || email.length < 7 || isErrorCheck) {
            // Высылаем на клиент ошибку валидации:
            return res.status(400).json({ error: true, message: "The email is incorrect"});
        // Если ошибок при проверке email выявлено не было, то запускаем следующую middleware():
        } else {
            next();
        }
    }
    passValidator(req, res, next) {
        // Извлечение пароля из запроса:
        const { pass } = req.body.data;

        // Ошибка при валидации возникнет в случае, если будут использованы запрещённые символы.
        // Доступными являются символы: любая буква, любое число, символ "-".
        const reg = /[^a-zA-Z0-9-]/;
        const isErrorCheck = reg.test(pass);

        // Если пароль по какой-то причине не был передан
        // Или длина пароля меньше 8 символов
        // Или возникла ошибка валидации, то:
        if (!pass || pass.length < 8 || isErrorCheck) {
            // Высылаем на клиент ошибку валидации:
            return res.status(400).json({ error: true, message: "The pass is incorrect"});
        // Если ошибок при проверке пароля выявлено не было, то запускаем следующую middleware():
        } else {
            next();
        }
    }
}

export default new AuthMiddleware();