import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOADING_STATUSES } from '../../constants/loading-statuses';

export interface RegistrState {
    loadingStatus: LOADING_STATUSES,
    loadingMessage: string,
}

const initialState: RegistrState = {
    loadingStatus: LOADING_STATUSES.notStarted,
    loadingMessage: "",
};

export const registrSlice = createSlice({
    name: 'registr',
    initialState,
    reducers: {
        startRegistr: (state) => {
            state.loadingStatus = LOADING_STATUSES.inProgress;
            state.loadingMessage = "Загрузка...";
            localStorage.clear();
        },
        successRegistr: (state, action: PayloadAction<string>) => {
            const successMessage = action.payload;
            state.loadingStatus = LOADING_STATUSES.success;
            state.loadingMessage = successMessage;
            localStorage.clear();
        },
        failedRegistr: (state, action: PayloadAction<string>) => {
            const errorMessage = action.payload;
            state.loadingStatus = LOADING_STATUSES.failed;
            state.loadingMessage = errorMessage;
            localStorage.clear();
        },
        resetStatusRegistr: (state) => {
            state.loadingStatus = LOADING_STATUSES.notStarted;
            state.loadingMessage = "";
        }
    },
});

export const registrActions = registrSlice.actions;
export const registrReducer = registrSlice.reducer;