import { RootState } from "../..";

export const selectDictionaryModuleState = (state: RootState) => state.dictionary;
export const selectDictionaryLoadingStatus = (state: RootState) => selectDictionaryModuleState(state).loadingStatus;
export const selectDictionaryResponseMessage = (state: RootState) => selectDictionaryModuleState(state).responseMessage;

export const selectDictionaryWordsIds = (state: RootState) => selectDictionaryModuleState(state).ids;
export const selectDictionaryWordById = (state:RootState, wordId: number) => selectDictionaryModuleState(state).entities[wordId];

export const selectNumExamplesAddedWord = (state: RootState) => selectDictionaryModuleState(state).modalData?.word.examples.length;
export const selectNumTranslationsAddedWord = (state: RootState) => selectDictionaryModuleState(state).modalData?.word.translations.length;
export const selectWordValue = (state: RootState) => selectDictionaryModuleState(state).modalData?.word.value;
export const selectExampleValue = (state: RootState, exampleIdx: number) => selectDictionaryModuleState(state).modalData?.word.examples[exampleIdx];
export const selectTranslationValue = (state: RootState, translationIdx: number) => selectDictionaryModuleState(state).modalData?.word.translations[translationIdx];

export const selectEmptyTranslationIdx = (state: RootState) => selectDictionaryModuleState(state).modalData?.word.translations.indexOf("");
export const selectEmptyExampleIdx = (state: RootState) => selectDictionaryModuleState(state).modalData?.word.examples.indexOf("");





