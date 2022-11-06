//<============================================= ИМПОРТ НЕОБХОДИМЫХ МОДУЛЕЙ =============================================>\\
import express from 'express';
import authController from '../controllers/auth-controller.js';
import authMiddleware from '../middlewares/auth-middleware.js';
const authRouter = express.Router();

//<========================================== ИЗВЛЕЧЕНИЕ MIDDLEWARES ВАЛИДАЦИИ ==========================================>\\
const checkLogin = authMiddleware.loginValidator;
const checkEmail = authMiddleware.emailValidator;
const checkPass = authMiddleware.passValidator;

//<==================================== ОБРАБОТКА МАРШРУТОВ РЕГИСТРАЦИИ И АВТОРИЗАЦИИ ===================================>\\
// Обработка маршрутов на авторизацию и регистрацию. Перед выполнением самой авторизации или регистрации запускаются
// вспомогательные middleware, которые выполняют валидацию данных (логина, email и пароля):
authRouter.post("/login", checkLogin, checkPass, authController.login);
authRouter.post("/registration", checkLogin, checkEmail, checkPass, authController.registration);

export default authRouter;