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
    modalState: "open" | "close",
}

const initialState: DictionaryState = {
    entities: {},
    ids: [],
    loadingStatus: LOADING_STATUSES.notStarted,
    loadingMessage: "",
    modalState: "close",
};


export const DictionarySlice = createSlice({
    name: "dictionary",
    initialState,
    reducers: {
        updateStateModal: (state) => {
            state.modalState = state.modalState === "open" ? "close" : "open";
        }
    }
});

export const dictionaryActions = DictionarySlice.actions;
export const dictionaryReducer = DictionarySlice.reducer;