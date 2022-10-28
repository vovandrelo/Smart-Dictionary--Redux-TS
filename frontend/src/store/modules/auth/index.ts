import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOADING_STATUSES } from '../../constants/loading-statuses';

export interface SuccessAuthPayload {
    message: string,
    error: boolean,
    token: string,
}

export interface AuthState {
    isAuth: boolean,
    loadingStatus: LOADING_STATUSES,
}

const initialState: AuthState = {
    isAuth: false,
    loadingStatus: LOADING_STATUSES.notStarted,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        startAuth: (state) => {
            state.loadingStatus = LOADING_STATUSES.inProgress;
        },
        successAuth: (state, action: PayloadAction<SuccessAuthPayload>) => {
            state.loadingStatus = LOADING_STATUSES.success;
            state.isAuth = true;
            const { message, token } = action.payload;
            localStorage.setItem('token', token);
            console.log(message);
        },
        failedAuth: (state, action: PayloadAction<string>) => {
            state.loadingStatus = LOADING_STATUSES.failed;
            localStorage.clear();
            console.log(action.payload);
        },
    },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;