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

export const deleteWordThunk = (deleteWordId: number): AppThunk =>
    async (dispatch, getState) => {
        dispatch(dictionaryActions.startDeleting({ deleteWordId }));

        try {
            const jwt = localStorage.getItem('token');

            const response: ResponseType = await axios.delete(`http://localhost:3001/dictionary/deleteWord/${deleteWordId}`, {
                headers: {
                    'authorization': jwt
                },
            });

            const { data: { message, error }} = response;

            dispatch(dictionaryActions.successDeleting({message, deleteWordId}));
        } catch (error: any) {
            const errorMessage: string = error.response.data.message;
            const errorCode: number = error.response.status;
            if (errorCode === 403) {
                dispatch(loginActions.logOut());
            }
            dispatch(dictionaryActions.failedDeleting({deleteWordId, errorMessage, errorCode}));
        }
    };