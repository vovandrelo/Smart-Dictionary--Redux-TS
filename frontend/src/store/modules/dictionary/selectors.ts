import { RootState } from "../..";

export const selectDictionaryModuleState = (state: RootState) => state.dictionary;
export const selectDictionaryLoadingStatus = (state: RootState) => selectDictionaryModuleState(state).loadingStatus;
export const selectDictionarySavingStatus = (state: RootState) => selectDictionaryModuleState(state).savingStatus;
export const selectDictionaryDeletingStatus = (state: RootState, wordId: number) => selectDictionaryModuleState(state).deletingStatus[wordId];
export const selectDictionaryResponseMessage = (state: RootState) => selectDictionaryModuleState(state).responseMessage;

export const selectDictionaryWordsIds = (state: RootState) => selectDictionaryModuleState(state).ids;
export const selectDictionaryWordById = (state:RootState, wordId: number) => selectDictionaryModuleState(state).entities[wordId];

export const selectModalIsOpen = (state: RootState) => !!selectDictionaryModuleState(state).modalData;
export const selectModalWordType = (state: RootState) => selectDictionaryModuleState(state).modalData?.wordType;
export const selectModalValue = (state: RootState) => selectDictionaryModuleState(state).modalData?.word.value;
export const selectModalNumTranslations = (state: RootState) => selectDictionaryModuleState(state).modalData?.word.translations.length;
export const selectModalTranslations = (state: RootState) => selectDictionaryModuleState(state).modalData?.word.translations;
export const selectModalNumExamples = (state: RootState) => selectDictionaryModuleState(state).modalData?.word.examples.length;
export const selectModalExampleByIdx = (state: RootState, exampleIdx: number) => selectDictionaryModuleState(state).modalData?.word.examples[exampleIdx];
export const selectModalTranslationByIdx = (state: RootState, translationIdx: number) => selectDictionaryModuleState(state).modalData?.word.translations[translationIdx];