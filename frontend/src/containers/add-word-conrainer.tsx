import { useState } from "react";
import ModalDictionary from "../components/modal-dictionary/modal-dictionary";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { dictionaryActions } from "../store/modules/collections/dictionary";
import { selectNumExamplesAddedWord, selectNumTranslationsAddedWord } from "../store/modules/collections/dictionary/selectors";
import { addWordThunk } from "../store/modules/collections/dictionary/middlewares/add-word-thunk";

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