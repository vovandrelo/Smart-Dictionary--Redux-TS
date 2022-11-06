import { RootState } from "../..";

export const selectRegistrModuleState = (state: RootState) => state.registr;
export const selectRegistrLoadingStatus = (state: RootState) => selectRegistrModuleState(state).loadingStatus;
export const selectRegistrLoadingMessage = (state: RootState) => selectRegistrModuleState(state).loadingMessage;