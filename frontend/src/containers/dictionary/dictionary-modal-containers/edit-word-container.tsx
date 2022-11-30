import { useState } from "react";
import ModalDictionary from "../../../components/modal-dictionary/modal-dictionary";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { dictionaryActions } from "../../../store/modules/dictionary";
import { selectNumExamplesAddedWord, selectNumTranslationsAddedWord } from "../../../store/modules/dictionary/selectors";
import { editWordThunk } from "../../../store/modules/dictionary/middlewares/edit-word-thunk";
import { selectLoginStatus } from "../../../store/modules/login/selectos";

const EditWordContainer = () => {
    const dispatch = useAppDispatch();

    const numTranslations = useAppSelector(selectNumTranslationsAddedWord);
    const numExamples = useAppSelector(selectNumExamplesAddedWord);


    if (!numTranslations || !numExamples) return null;
    
    const saveWord = () => {        
        dispatch(editWordThunk());
    }

    return (
        <ModalDictionary
            numTranslations={numTranslations}
            numExamples={numExamples}
            addNewTranslation={() => dispatch(dictionaryActions.addNewTranslation())}
            addNewExampl={() => dispatch(dictionaryActions.addNewExample())}
            saveWord={saveWord}
        />
    )
}

export default EditWordContainer;