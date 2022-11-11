import { createSlice } from "@reduxjs/toolkit";
import { LOADING_STATUSES } from "../../../constants/loading-statuses";

interface DictionaryWord {

}

interface DictionaryState {
    entities: {
        [propName: string]: DictionaryWord,
    },
    ids: number[],
    loadingStatus: LOADING_STATUSES,
    loadingMessage: string,
}

const initialState: DictionaryState = {
    entities: {},
    ids: [],
    loadingStatus: LOADING_STATUSES.notStarted,
    loadingMessage: "",
};


export const DictionarySlice = createSlice({
    name: "dictionary",
    initialState,
    reducers: {
        
    }
});

export const dictionaryActions = DictionarySlice.actions;
export const dictionaryReducer = DictionarySlice.reducer;