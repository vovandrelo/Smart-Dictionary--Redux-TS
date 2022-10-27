import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import authModel from "../models/auth-model.js";
import { KEY } from "../config.js";

class AuthController {
    async login(req, res) {
        // Получение из запроса на авторизацию данных пользователя:
        const { login, pass } = req.body;

        // Получение пользователя из БД:
        const getUserResult = await authModel.getUser(login);

        // Если пользователя с таким логином не существует:
        if (getUserResult.error) {
            // Высылаем на клиент ошибку авторизации:
            return res.status(400).json(getUserResult)
        // Если пользователь существует:
        } else {
            // Проверка на соответствие паролей:
            const passCheck = await bcrypt.compare(pass, getUserResult.user.pass);
            // Если пароли совпадают, то:
            if (passCheck) {
                // Получение необходимых для token-а данных:
                const { id, login, role } = getUserResult.user;
                // Создание токена:
                const token = Jwt.sign({ id, login, role }, KEY, { expiresIn: '5h' });
                // Ответ пользователю с JWT-токеном:
                return res.status(200).json({error: false, masseage: "Authorization completed successfully", token })
            // Если пароли не совпадают, то:
            } else {
                // Высылаем на клиент ошибку авторизации:
                return res.status(400).json({error: true, masseage: "Invalid password"})
            }
        }
    }
    async registration(req, res) {
        // Получение из запроса на регистрацию данных пользователя:
        const { login, pass, name, email } = req.body;

        // Проверка на существование пользователя с таким логином или email:
        const checkResult = await authModel.checkingForExistence(login, email);

        // Если пользователь уже существует:
        if (checkResult.error) {
            // Высылаем на клиент ошибку регистрации:
            return res.status(400).json(checkResult)
        // Если пользователь не существует:
        } else {
            // Шифруем пароль пользователя:
            const passHash = await bcrypt.hash(pass, 10);

            // Создаём объект нового пользователя:
            const newUser = {
                name,
                login,
                email,
                pass: passHash,
                role: "user",
            }

            // Выполняем регистрацию пользователя:
            const regResult = await authModel.registration(newUser);

            // Если при регистрации пользователя произошла ошибка:
            if (regResult.error) {
                // Высылаем на клиент ошибку регистрации:
                return res.status(400).json(regResult);
            // Если регистрация пользователя прошла успешно:
            } else {
                // Высылаем на клиент сообщение с успешной регистрацией:
                return res.status(200).json(regResult);
            }
        }
    }
}

export default new AuthController();