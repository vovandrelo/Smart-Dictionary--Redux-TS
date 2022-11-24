import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LOADING_STATUSES } from "../../constants/loading-statuses";


export interface DictionaryWord {
    id: number,
    idUser: number,
    value: string,
    translations: string[],
    examples: string[],
    dateAdded: string,
    nextRepeat: string,
    stage: number,
}

interface DictionaryState {
    entities: {
        [propName: number]: DictionaryWord,
    },
    ids: number[],
    loadingStatus: LOADING_STATUSES,
    updatingStatus: LOADING_STATUSES,
    responseMessage: string,
    editableWord: {

    },
    addedWord: {
        word: string,
        translations: string[],
        examples: string[],
    }
}

const initialState: DictionaryState = {
    entities: {},
    ids: [],
    loadingStatus: LOADING_STATUSES.notStarted,
    updatingStatus: LOADING_STATUSES.notStarted,
    editableWord: {},
    addedWord: {
        word: "",
        translations: [""],
        examples: [""],
    },
    responseMessage: "",
};

export const DictionarySlice = createSlice({
    name: "dictionary",
    initialState,
    reducers: {
        editAddedWord: (state, action: PayloadAction<{newValue: string, wordType: "added" | "editable"}>) => {
            const { newValue, wordType } = action.payload;
            if (wordType === "added") {
                state.addedWord.word = newValue;
            } else if (wordType === "editable") {

            }
            
        },
        addNewTranslation: (state, action: PayloadAction<{wordType: "added" | "editable"}>) => {
            const { wordType } = action.payload;
            if (wordType === "added") {
                state.addedWord.translations.push("");
            } else if (wordType === "editable") {

            }
        },
        editTranslation: (state, action: PayloadAction<{newValue: string, idx: number, wordType: "added" | "editable"}>) => {
            const { newValue, idx, wordType } = action.payload;
            if (wordType === "added") {
                state.addedWord.translations[idx] = newValue;
            } else if (wordType === "editable") {

            }
        },
        addNewExample: (state, action: PayloadAction<{wordType: "added" | "editable"}>) => {
            const { wordType } = action.payload;
            if (wordType === "added") {
                state.addedWord.examples.push("");
            } else if (wordType === "editable") {

            }
        },
        editExample: (state, action: PayloadAction<{newValue: string, idx: number, wordType: "added" | "editable"}>) => {
            const { newValue, idx, wordType } = action.payload;
            if (wordType === "added") {
                state.addedWord.examples[idx] = newValue;
            } else if (wordType === "editable") {

            }
        },



        startLoading: (state) => {
            state.loadingStatus = LOADING_STATUSES.inProgress;
        },
        startUpdating: (state) => {
            state.updatingStatus = LOADING_STATUSES.inProgress;
        },
        successLoading: (state, action: PayloadAction<{ message: string, error: boolean, words: DictionaryWord[] }>) => {
            const { message, error, words } = action.payload;

            state.ids = words.map(word => word.id);
            state.entities = words.reduce((acc, word) => {
                acc[word.id] = word;
                return acc;
            }, state.entities);

            state.loadingStatus = LOADING_STATUSES.success;
            state.responseMessage = message;    
        },
        successUpdating: (state, action: PayloadAction<string>) => {
            const updatingMessage = action.payload;
            state.updatingStatus = LOADING_STATUSES.success;
            state.responseMessage = updatingMessage;   
        },
        failedLoading: (state, action: PayloadAction<{errorCode: number, errorMessage: string}>) => {
            const { errorCode, errorMessage } = action.payload;
            state.loadingStatus = LOADING_STATUSES.failed;
            state.responseMessage = errorMessage;
        },
        failedUpdating: (state, action: PayloadAction<{errorCode: number, errorMessage: string}>) => {
            const { errorCode, errorMessage } = action.payload;            
            state.updatingStatus = LOADING_STATUSES.failed;
            state.responseMessage = errorMessage;
        },
    }
});

export const dictionaryActions = DictionarySlice.actions;
export const dictionaryReducer = DictionarySlice.reducer;