import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LOADING_STATUSES } from "../../constants/loading-statuses";
import { DictionaryWord } from "../dictionary/index";

interface LearnState {
    entities: {
        [propName: number]: DictionaryWord,
    },
    ids: number[],
    value: string[],
    translations: string[][],
    loadingStatus: LOADING_STATUSES,
    updatingStatus: LOADING_STATUSES,
    responseMessage: string,
    trainingStage: number,
}

const initialState: LearnState = {
    entities: {},
    ids: [],
    value: [],
    translations: [],
    loadingStatus: LOADING_STATUSES.notStarted,
    updatingStatus: LOADING_STATUSES.notStarted,
    responseMessage: "",
    trainingStage: 0,
}

export const LearnSlice = createSlice({
    name: "learn",
    initialState,
    reducers: {
        startLoading: (state) => {
            state.loadingStatus = LOADING_STATUSES.inProgress;
        },
        startUpdating: (state) => {
            state.updatingStatus = LOADING_STATUSES.inProgress;
        },
        successLoading: (state, action: PayloadAction<{ message: string, error: boolean, words: DictionaryWord[] }>) => {
            const { message, error, words } = action.payload;

            state.ids = words.map(word => word.id);
            state.value = words.map(word => word.value);
            state.translations = words.map(word => word.translations);
            state.entities = words.reduce((acc, word) => {
                acc[word.id] = word;
                return acc;
            }, state.entities);

            state.loadingStatus = LOADING_STATUSES.success;
            state.responseMessage = message;
        },
        failedLoading: (state, action: PayloadAction<{errorCode: number, errorMessage: string}>) => {
            const { errorCode, errorMessage } = action.payload;
            state.loadingStatus = LOADING_STATUSES.failed;
            state.responseMessage = errorMessage;
        },
        failedUpdating: (state, action: PayloadAction<{errorCode: number, errorMessage: string}>) => {

        },
        trainingStageUp: (state) => {
            state.trainingStage++;
        }
    }
});


export const learnActions = LearnSlice.actions;
export const learnReducer = LearnSlice.reducer;
