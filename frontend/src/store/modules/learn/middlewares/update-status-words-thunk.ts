import { AppThunk } from "../../..";
import axios from "axios";
import { DictionaryWord } from "../../dictionary/index";
import { learnActions } from "..";


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

export const updateStatusWordsThunk = (): AppThunk =>
    async (dispatch, getState) => {
        dispatch(learnActions.startLoading());

        try {
            const jwt = localStorage.getItem('token');

            const response: ResponseType = await axios.get("http://localhost:3001/learn/get-random-words", {
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

            dispatch(learnActions.successLoading({message, error, words: newWordsFormat}))
        } catch (error: any) {
            const errorMessage: string = error.response.data.message;
            const errorCode: number = error.response.status;
            if (errorCode === 403) {
                dispatch(loginActions.logOut());
            }
            dispatch(learnActions.failedLoading({errorMessage, errorCode}));
        }        
    };