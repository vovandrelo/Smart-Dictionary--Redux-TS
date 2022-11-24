import { RootState } from "../..";

export const selectDictionaryModuleState = (state: RootState) => state.dictionary;
export const selectDictionaryLoadingStatus = (state: RootState) => selectDictionaryModuleState(state).loadingStatus;
export const selectDictionaryResponseMessage = (state: RootState) => selectDictionaryModuleState(state).responseMessage;
export const selectDictionaryWordsIds = (state: RootState) => selectDictionaryModuleState(state).ids;
export const selectDictionaryWordById = (state:RootState, wordId: number) => selectDictionaryModuleState(state).entities[wordId];

export const selectNumExamplesAddedWord = (state: RootState) => selectDictionaryModuleState(state).addedWord.examples.length;
export const selectNumTranslationsAddedWord = (state: RootState) => selectDictionaryModuleState(state).addedWord.translations.length;