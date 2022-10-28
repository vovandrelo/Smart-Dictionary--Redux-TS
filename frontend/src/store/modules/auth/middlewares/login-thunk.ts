import { AppThunk } from "../../..";
import axios from "axios";
import { authActions } from "..";

export const loginThunk = (userData: { login: string, pass: string }): AppThunk =>
    async (dispatch, getState) => {
        // Если пользователь уже авторизован, то отменяем запрос на авторизацию:
        if (getState().auth.isAuth) {
            return;
        }

        // Запускаем действие начала авторизации:
        dispatch(authActions.startAuth());

        try {
            // Отправка данных на сервер для авторизации. В случае успещного запроса сервер пришлёт информацию об отсутствии ошибок и токен:
            const { data: { message, error, token }} = await axios.post("http://localhost:3001/auth/login/", {
                data: {
                    login: userData.login,
                    pass: userData.pass,
                },
            });       
            // Если запрос был выполнен успешно, то запускаем действие удачной авторизации:
            dispatch(authActions.successAuth({message, error, token}))
        } catch (error: any) {
            // Если запрос был выполнен с ошибкой, то запускаем действие неудачной авторизации:
            dispatch(authActions.failedAuth(error.response.data.message));
        }        
    };