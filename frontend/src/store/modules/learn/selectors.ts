import { RootState } from "../..";

export const selectLearnModuleState = (state: RootState) => state.learn;
export const selectLearnTrainingStage = (state: RootState) => selectLearnModuleState(state).trainingStage;
export const selectLearnWordIds = (state: RootState) => selectLearnModuleState(state).ids;
export const selectLearWordValue = (state: RootState) => selectLearnModuleState(state).value;
export const selectLearWordTranslations = (state: RootState) => selectLearnModuleState(state).translations;
export const selectLearnWordById = (state: RootState, wordId: number) => selectLearnModuleState(state).entities[wordId];