import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOADING_STATUSES } from '../../constants/loading-statuses';


export interface RegistrState {
    loadingStatus: LOADING_STATUSES,
}

const initialState: RegistrState = {
    loadingStatus: LOADING_STATUSES.notStarted,
};

export const registrSlice = createSlice({
    name: 'registr',
    initialState,
    reducers: {
        startRegistr: (state) => {
            state.loadingStatus = LOADING_STATUSES.inProgress;
            localStorage.clear();
        },
        successRegistr: (state, action: PayloadAction<string>) => {
            state.loadingStatus = LOADING_STATUSES.success;
            console.log(action.payload);
            localStorage.clear();
        },
        failedRegistr: (state, action: PayloadAction<string>) => {
            state.loadingStatus = LOADING_STATUSES.failed;
            console.log(action.payload);
            localStorage.clear();
        },
    },
});

export const registrActions = registrSlice.actions;
export const registrReducer = registrSlice.reducer;