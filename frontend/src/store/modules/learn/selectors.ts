import { RootState } from "../..";

export const selectLearnModuleState = (state: RootState) => state.learn;
export const selectLearnModuleTrainingStage = (state: RootState) => selectLearnModuleState(state).trainingStage;
export const selectLearnModuleIds = (state: RootState) => selectLearnModuleState(state).ids;
export const selectLearnModuleValues = (state: RootState) => selectLearnModuleState(state).value;
export const selectLearnModuleTranslations = (state: RootState) => selectLearnModuleState(state).translations;
export const selectLearnModuleWordValue = (state: RootState, wordId: number) => selectLearnModuleState(state).entities[wordId].value;
export const selectLearnModuleWordTranslations = (state: RootState, wordId: number) => selectLearnModuleState(state).entities[wordId].translations;
export const selectLearnWordById = (state: RootState, wordId: number) => selectLearnModuleState(state).entities[wordId];