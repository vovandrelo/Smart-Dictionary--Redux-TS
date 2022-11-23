

import { AppThunk } from "../../../..";
import axios from "axios";
import { dictionaryActions } from "..";

export const getWordsThunk = (): AppThunk =>
    async (dispatch, getState) => {
        console.log("Thunk-а получение всех слов");

        // Если пользователь не авторизован, то отменяем запрос на получение слов:        
        /* if (!getState().login.isLogin) {
            return;
        } */

        // Запускаем действие начала авторизации:
        //dispatch(loginActions.startLogin());

        try {
            // Извлечение jwt токена:
            const jwt = localStorage.getItem('token');

            const { data: { message, error, words }} = await axios.get("http://localhost:3001/dictionary", {
                headers: {'authorization': jwt},
            });
            console.log(message, error, words);
            // Если запрос был выполнен успешно, то запускаем действие удачной авторизации:
            //dispatch(loginActions.successLogin({message, error, token}))
        } catch (error: any) {
            console.log(error);
            // Если запрос был выполнен с ошибкой, то запускаем действие неудачной авторизации:
            //dispatch(loginActions.failedLogin(error.response.data.message));
        }        
    };