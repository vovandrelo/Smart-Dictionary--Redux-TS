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

    modalData?: {
        wordType: "added" | "editable",
        wordId?: number,
        word: {
            value: string,
            translations: string[],
            examples: string[],
        }
    }
}

const initialState: DictionaryState = {
    entities: {},
    ids: [],
    loadingStatus: LOADING_STATUSES.notStarted,
    updatingStatus: LOADING_STATUSES.notStarted,
    responseMessage: "",
};

export const DictionarySlice = createSlice({
    name: "dictionary",
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<{wordType: "added" | "editable", wordId?: number}>) => {
            const { wordType, wordId } = action.payload;
            if (wordType === "added") {
                state.modalData = {
                    wordType,
                    word: {
                        value: "",
                        translations: [""],
                        examples: [""],
                    }
                }
            } else if (wordType === "editable" && wordId) {
                const editableWord = state.entities[wordId];
                
                if (!editableWord) return;

                const { value, translations, examples } = editableWord;

                state.modalData = {
                    wordType,
                    wordId,
                    word: {
                        value,
                        translations: [...translations],
                        examples: [...examples],
                    }
                }
            }
        },

        closeModal: (state) => {
            if (state.modalData) delete state.modalData;
        },
        addNewTranslation: (state) => {
            if (state.modalData) state.modalData.word.translations.push("");
        },
        addNewExample: (state) => {
            if (state.modalData) state.modalData.word.examples.push("");
        },
        editWordValue: (state, action: PayloadAction<{newValue: string}>) => {
            const { newValue } = action.payload;
            if (state.modalData) {
                state.modalData.word.value = newValue;
            }
        },
        editTranslation: (state, action: PayloadAction<{newValue: string, idx: number}>) => {
            const { newValue, idx } = action.payload;
            if (state.modalData) {
                state.modalData.word.translations[idx] = newValue;
            }
        },
        editExample: (state, action: PayloadAction<{newValue: string, idx: number}>) => {
            const { newValue, idx } = action.payload;
            if (state.modalData) {
                state.modalData.word.examples[idx] = newValue;
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