//<==================================================== ИМПОРТ МОДУЛЕЙ ==================================================>\\
import express from 'express';
import cors from "cors"
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { PORT } from './config.js';

//<==================================================== ИМПОРТ РОУТОВ ===================================================>\\
import authRouter from './routes/auth-routes.js';
import dictionaryRouter from './routes/dictionary-routes.js';

//<=============================================== КОНФИГУРАЦИЯ ПРИЛОЖЕНИЯ ==============================================>\\
const app = express();                                          // Создание объекта Node-приложения
export const __filename = fileURLToPath(import.meta.url);       // Объявление КС __filename
export const __dirname = dirname(__filename);                   // Объявление КС __dirname
const corsOptions = {                                           // Отключение CORS
    origin: '*', 
    credentials: true,
    optionSuccessStatus: 200,
}

app.use(express.static(join(__dirname, "..", "frontend")));     // Установка пути до статических файлов
app.use(express.json());                                        // Парсинг JSON
app.use(cors(corsOptions))                                      // Отмена CORS-защиты


//<================================================== ОБЪЯВЛЕНИЕ РОУТОВ =================================================>\\

app.use("/auth", authRouter);
app.use("/dictionary", dictionaryRouter);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('*', (req, res) => {
    res.status(404).send('wtf???');
});

//<==================================================== ЗАПУСК СЕРВЕРА ==================================================>\\
app.listen(PORT, () => {
    console.log("Server is running!")
})