import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
    isAuth: boolean,
    user: {
        id: string,
        role: string,
    } | null
}

const initialState: AuthState = {
    isAuth: false,
    user: null,
};


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        increment: (state) => {},
        decrement: (state) => {},
        incrementByAmount: (state, action: PayloadAction<number>) => {},
    },
});


export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;