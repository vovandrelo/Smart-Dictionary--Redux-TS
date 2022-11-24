

import { AppThunk } from "../../..";
import axios from "axios";
import { dictionaryActions } from "..";
import { loginActions } from "../../login";

interface ResponseType {
    data: {
        message: string,
        error: boolean,
    }
}

export const addWordThunk = (): AppThunk =>
    async (dispatch, getState) => {
        dispatch(dictionaryActions.startUpdating());

        try {
            const jwt = localStorage.getItem('token');
            const newWordValue = getState().dictionary.addedWord.word;
            const newWordTranslations = getState().dictionary.addedWord.translations.join(", ");
            const newWordExamples = getState().dictionary.addedWord.examples.join(", ");

            const newWord = {
                value: newWordValue,
                translations: newWordTranslations,
                examples: newWordExamples,
            }

            const response: ResponseType = await axios.post("http://localhost:3001/dictionary/addWord/", newWord, {
                headers: {
                    'authorization': jwt
                },
            });
            const { data: { message, error }} = response;

            dispatch(dictionaryActions.successUpdating(message))
        } catch (error: any) {
            const errorMessage: string = error.response.data.message;
            const errorCode: number = error.response.status;
            if (errorCode === 403) {
                dispatch(loginActions.logOut());
            }
            dispatch(dictionaryActions.failedUpdating({errorMessage, errorCode}));
        }        
    };