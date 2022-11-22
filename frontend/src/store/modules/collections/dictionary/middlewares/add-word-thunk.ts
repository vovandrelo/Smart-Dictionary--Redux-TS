

import { AppThunk } from "../../../..";
import axios from "axios";
import { dictionaryActions } from "..";

export const addWordThunk = (): AppThunk =>
    async (dispatch, getState) => {


        console.log("Thunk-а добавления нового слова");
        

        // Если пользователь уже авторизован, то отменяем запрос на авторизацию:
        /* if (getState().login.isLogin) {
            return;
        } */

        // Запускаем действие начала авторизации:
        //dispatch(loginActions.startLogin());

        try {
            // Отправка данных на сервер для авторизации. В случае успещного запроса сервер пришлёт информацию об отсутствии ошибок и токен:
            /* const { data: { message, error, token }} = await axios.post("http://localhost:3001/auth/login/", {
                data: {
                    login: userData.login,
                    pass: userData.pass,
                },
            });    */    
            // Если запрос был выполнен успешно, то запускаем действие удачной авторизации:
            //dispatch(loginActions.successLogin({message, error, token}))
        } catch (error: any) {
            // Если запрос был выполнен с ошибкой, то запускаем действие неудачной авторизации:
            //dispatch(loginActions.failedLogin(error.response.data.message));
        }        
    };