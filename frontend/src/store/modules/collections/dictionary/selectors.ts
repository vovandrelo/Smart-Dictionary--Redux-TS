import { RootState } from "../../..";

export const selectDictionaryModuleState = (state: RootState) => state.dictionary;
export const selectDictionaryLoadingStatus = (state: RootState) => selectDictionaryModuleState(state).loadingStatus;
export const selectDictionaryMessageStatus = (state: RootState) => selectDictionaryModuleState(state).loadingMessage;

export const selectNumExamplesAddedWord = (state: RootState) => selectDictionaryModuleState(state).addedWord.examples.length;
export const selectNumTranslationsAddedWord = (state: RootState) => selectDictionaryModuleState(state).addedWord.translations.length;