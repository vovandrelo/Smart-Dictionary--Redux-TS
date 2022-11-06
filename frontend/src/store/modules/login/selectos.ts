import { RootState } from "../..";

export const selectLoginModuleState = (state: RootState) => state.login;
export const selectLoginLoadingStatus = (state: RootState) => selectLoginModuleState(state).loadingStatus;
export const selectLoginLoadingMessage = (state: RootState) => selectLoginModuleState(state).loadingMessage;