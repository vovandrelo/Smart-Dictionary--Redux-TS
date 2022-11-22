import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LOADING_STATUSES } from "../../../constants/loading-statuses";


interface DictionaryWord {
    
}

interface DictionaryState {
    entities: {
        [propName: string]: DictionaryWord,
    },
    ids: number[],
    loadingStatus: LOADING_STATUSES,
    updatingStatus: LOADING_STATUSES,
    loadingMessage: string,
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
    loadingMessage: "",
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
        }
    }
});

export const dictionaryActions = DictionarySlice.actions;
export const dictionaryReducer = DictionarySlice.reducer;