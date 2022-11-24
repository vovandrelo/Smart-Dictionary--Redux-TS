import { AppThunk } from "../../..";
import axios from "axios";
import { dictionaryActions } from "..";
import { DictionaryWord } from "..";
import { loginActions } from "../../login";

interface ResponseType {
    data: {
        message: string,
        error: boolean,
        words: {
            id: number,
            id_user: number,
            value: string,
            translations: string,
            examples: string,
            date_added: string,
            next_repeat: string,
            stage: number,
        }[],
    }
}

export const getWordsThunk = (): AppThunk =>
    async (dispatch, getState) => {
        dispatch(dictionaryActions.startLoading());

        try {
            const jwt = localStorage.getItem('token');

            const response: ResponseType = await axios.get("http://localhost:3001/dictionary", {
                headers: {'authorization': jwt},
            });

            const { data: { message, error, words }} = response;
            
            const newWordsFormat: DictionaryWord[] = words.map(word => ({
                    id: word.id,
                    idUser: word.id_user,
                    value: word.value,
                    translations: word.translations.split(", "),
                    examples: word.examples.split(", "),
                    dateAdded: word.date_added,
                    nextRepeat: word.next_repeat,
                    stage: word.stage,
                }
            ));

            dispatch(dictionaryActions.successLoading({message, error, words: newWordsFormat}))
        } catch (error: any) {
            const errorMessage: string = error.response.data.message;
            const errorCode: number = error.response.status;
            if (errorCode === 403) {
                dispatch(loginActions.logOut());
            }
            dispatch(dictionaryActions.failedLoading({errorMessage, errorCode}));
        }        
    };