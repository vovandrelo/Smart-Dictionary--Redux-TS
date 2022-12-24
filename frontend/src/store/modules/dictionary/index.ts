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
    savingStatus: LOADING_STATUSES,
    deletingStatus: {
        [propName: number]: LOADING_STATUSES,
    }
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
    savingStatus: LOADING_STATUSES.notStarted,
    deletingStatus: {},
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
            if (state.modalData) {
                const emptyTranslation = state.modalData.word.translations.includes("");
                if (emptyTranslation) return;
                state.modalData.word.translations.push("");
            }
        },
        addNewExample: (state) => {
            if (state.modalData) {
                const emptyExamples = state.modalData.word.examples.includes("");
                if (emptyExamples) return;
                state.modalData.word.examples.push("");
            }
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
                const examples = state.modalData.word.examples;
                const translations = state.modalData.word.translations;
                translations[idx] = newValue;
                state.modalData.word.examples = examples.filter((example) => example.length !== 0);
                state.modalData.word.translations = translations.filter((translation) => translation.length !== 0);
                if (state.modalData.word.examples.length === 0) state.modalData.word.examples.push("");
                if (state.modalData.word.translations.length === 0) state.modalData.word.translations.push("");
            }
        },
        editExample: (state, action: PayloadAction<{newValue: string, idx: number}>) => {
            const { newValue, idx } = action.payload;
            if (state.modalData) {
                const examples = state.modalData.word.examples;
                const translations = state.modalData.word.translations;
                examples[idx] = newValue;
                state.modalData.word.examples = examples.filter((example) => example.length !== 0);
                state.modalData.word.translations = translations.filter((translation) => translation.length !== 0);
                if (state.modalData.word.examples.length === 0) state.modalData.word.examples.push("");
                if (state.modalData.word.translations.length === 0) state.modalData.word.translations.push("");
            }
        },

        startLoading: (state) => {
            state.loadingStatus = LOADING_STATUSES.inProgress;
        },
        startSaving: (state) => {
            state.savingStatus = LOADING_STATUSES.inProgress;
        },
        startDeleting: (state, action: PayloadAction<{ deleteWordId: number }>) => {
            const { deleteWordId } = action.payload;
            state.deletingStatus[deleteWordId] = LOADING_STATUSES.inProgress;
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
        successSaving: (state, action: PayloadAction<string>) => {
            const updatingMessage = action.payload;
            state.savingStatus = LOADING_STATUSES.success;
            state.responseMessage = updatingMessage;
        },
        successDeleting: (state, action: PayloadAction<{message: string, deleteWordId: number}>) => {
            const { message, deleteWordId } = action.payload;
            state.deletingStatus[deleteWordId] = LOADING_STATUSES.success;
            delete state.entities[deleteWordId];
            state.ids = state.ids.filter(id => id !== deleteWordId);
            state.responseMessage = message;
        },
        failedLoading: (state, action: PayloadAction<{errorCode: number, errorMessage: string}>) => {
            const { errorCode, errorMessage } = action.payload;
            state.loadingStatus = LOADING_STATUSES.failed;
            state.responseMessage = errorMessage;
        },

        failedSaving: (state, action: PayloadAction<{errorCode: number, errorMessage: string}>) => {
            const { errorCode, errorMessage } = action.payload;            
            state.savingStatus = LOADING_STATUSES.failed;
            state.responseMessage = errorMessage;
        },
        failedDeleting: (state, action: PayloadAction<{ deleteWordId: number, errorCode: number, errorMessage: string }>) => {
            const { deleteWordId, errorCode, errorMessage } = action.payload;
            state.deletingStatus[deleteWordId] = LOADING_STATUSES.failed;
            state.responseMessage = errorMessage;
        },

        resetStatuses: (state) => {
            state.loadingStatus = LOADING_STATUSES.notStarted;
            state.savingStatus = LOADING_STATUSES.notStarted;

            const newDeletingStatus = {...state.deletingStatus};
            for (let key in state.deletingStatus) {
                if (state.deletingStatus[key] === LOADING_STATUSES.success || state.deletingStatus[key] === LOADING_STATUSES.failed) {
                    delete newDeletingStatus[key];
                }
            }
            state.deletingStatus = newDeletingStatus;
        }
    }
});

export const dictionaryActions = DictionarySlice.actions;
export const dictionaryReducer = DictionarySlice.reducer;