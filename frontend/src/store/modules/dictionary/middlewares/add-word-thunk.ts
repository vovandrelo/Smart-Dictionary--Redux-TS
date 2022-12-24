

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
        dispatch(dictionaryActions.startSaving());
        
        try {
            const jwt = localStorage.getItem('token');
            const newWordValue = getState().dictionary.modalData?.word.value;
            const newWordTranslations = getState().dictionary.modalData?.word.translations.join(", ");
            const newWordExamples = getState().dictionary.modalData?.word.examples.join(", ");

            if (!newWordValue || !newWordTranslations) return;

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

            dispatch(dictionaryActions.successSaving(message))
        } catch (error: any) {
            const errorMessage: string = error.response.data.message;
            const errorCode: number = error.response.status;
            if (errorCode === 403) {
                dispatch(loginActions.logOut());
            }
            dispatch(dictionaryActions.failedSaving({errorMessage, errorCode}));
        }
    };