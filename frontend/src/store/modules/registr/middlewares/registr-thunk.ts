import { AppThunk } from "../../..";
import axios from "axios";
import { registrActions } from "..";

export const registrThunk = (userData: { login: string, pass: string, email: string, name: string }): AppThunk =>
    async (dispatch, getState) => {
        // Если пользователь авторизован, то отменяем запрос на регистрацию:
        if (getState().login.isLogin) {
            return;
        }

        // Запускаем действие начала регистрации:
        dispatch(registrActions.startRegistr());

        try {
            // Отправка данных на сервер для регистрации. В случае успещного запроса сервер пришлёт информацию об отсутствии ошибок:
            const { data: { message }} = await axios.post("http://localhost:3001/auth/registration/", {
                data: {
                    login: userData.login,
                    pass: userData.pass,
                    email: userData.email,
                    name: userData.name,
                },
            });
            // Если запрос был выполнен успешно, то запускаем действие удачной регистрации:
            dispatch(registrActions.successRegistr(message))
        } catch (error: any) {
            // Если запрос был выполнен с ошибкой, то запускаем действие неудачной авторизации:
            dispatch(registrActions.failedRegistr(error.response.data.message));
        }        
    };