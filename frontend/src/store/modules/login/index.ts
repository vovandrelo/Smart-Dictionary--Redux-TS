import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOADING_STATUSES } from '../../constants/loading-statuses';

export interface SuccessLoginPayload {
    message: string,
    error: boolean,
    token: string,
}

export interface LoginState {
    isLogin: boolean,
    loadingStatus: LOADING_STATUSES,
    loadingMessage: string,
}

const initialState: LoginState = {
    isLogin: true,
    loadingStatus: LOADING_STATUSES.notStarted,
    loadingMessage: "",
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        startLogin: (state) => {
            state.loadingStatus = LOADING_STATUSES.inProgress;
            state.loadingMessage = "Загрузка...";
            localStorage.clear();
        },
        successLogin: (state, action: PayloadAction<SuccessLoginPayload>) => {
            const { message: successMessage, token } = action.payload;
            state.loadingStatus = LOADING_STATUSES.success;
            state.loadingMessage = successMessage;
            state.isLogin = true;
            localStorage.setItem('token', token);
        },
        failedLogin: (state, action: PayloadAction<string>) => {
            const errorMessage = action.payload;
            state.loadingStatus = LOADING_STATUSES.failed;
            state.loadingMessage = errorMessage;
            localStorage.clear();
        },
        resetStatusLogin: (state) => {
            state.loadingStatus = LOADING_STATUSES.notStarted;
            state.loadingMessage = "";
        },
        logOut: (state) => {
            state.isLogin = false;
            state.loadingStatus = LOADING_STATUSES.notStarted;
            state.loadingMessage = "";
            localStorage.clear();
        }
    },
});

export const loginActions = loginSlice.actions;
export const loginReducer = loginSlice.reducer;