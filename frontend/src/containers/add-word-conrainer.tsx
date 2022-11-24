import { useState } from "react";
import ModalDictionary from "../components/modal-dictionary/modal-dictionary";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { dictionaryActions } from "../store/modules/dictionary";
import { selectNumExamplesAddedWord, selectNumTranslationsAddedWord } from "../store/modules/dictionary/selectors";
import { addWordThunk } from "../store/modules/dictionary/middlewares/add-word-thunk";
import { selectLoginStatus } from "../store/modules/login/selectos";

const AddWordContainer = () => {
    const dispatch = useAppDispatch();

    const numTranslations = useAppSelector(selectNumTranslationsAddedWord);
    const numExamples = useAppSelector(selectNumExamplesAddedWord);
    
    const saveWord = () => {
        dispatch(addWordThunk())
    }

    return (
        <ModalDictionary
            numTranslations={numTranslations}
            numExamples={numExamples}
            addNewTranslation={() => dispatch(dictionaryActions.addNewTranslation({ wordType: "added" }))}
            addNewExampl={() => dispatch(dictionaryActions.addNewExample({ wordType: "added" }))}
            saveWord={saveWord}
        />
    )
}

export default AddWordContainer;