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

export const editWordThunk = (): AppThunk =>
    async (dispatch, getState) => {
        dispatch(dictionaryActions.startUpdating());

        try {
            const jwt = localStorage.getItem('token');
            const editWordId = getState().dictionary.modalData?.wordId;
            const editWordValue = getState().dictionary.modalData?.word.value;
            const editWordTranslations = getState().dictionary.modalData?.word.translations.join(", ");
            const editWordExamples = getState().dictionary.modalData?.word.examples.join(", ");

            if (!editWordValue || !editWordTranslations || !editWordExamples || !editWordId) return;

            const editWord = {
                id: editWordId,
                value: editWordValue,
                translations: editWordTranslations,
                examples: editWordExamples,
            }

            const response: ResponseType = await axios.put(`http://localhost:3001/dictionary/editWord/${editWordId}`, editWord, {
                headers: {
                    'authorization': jwt
                },
            });
            const { data: { message, error }} = response;

            dispatch(dictionaryActions.successUpdating(message));
        } catch (error: any) {
            const errorMessage: string = error.response.data.message;
            const errorCode: number = error.response.status;
            if (errorCode === 403) {
                dispatch(loginActions.logOut());
            }
            dispatch(dictionaryActions.failedUpdating({errorMessage, errorCode}));
        }
    };