import { RootState } from "../..";

export const selectLoginModuleState = (state: RootState) => state.login;
export const selectLoginStatus = (state: RootState) => selectLoginModuleState(state).isLogin;
export const selectLoginLoadingStatus = (state: RootState) => selectLoginModuleState(state).loadingStatus;
export const selectLoginLoadingMessage = (state: RootState) => selectLoginModuleState(state).loadingMessage;