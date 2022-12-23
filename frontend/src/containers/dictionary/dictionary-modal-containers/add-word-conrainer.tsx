import { useState } from "react";
import ModalDictionary from "../../../components/modal-dictionary/modal-dictionary";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { dictionaryActions } from "../../../store/modules/dictionary";
import { selectEmptyExampleIdx, selectEmptyTranslationIdx, selectNumExamplesAddedWord, selectNumTranslationsAddedWord, selectWordValue } from "../../../store/modules/dictionary/selectors";
import { addWordThunk } from "../../../store/modules/dictionary/middlewares/add-word-thunk";
import { selectLoginStatus } from "../../../store/modules/login/selectos";

const AddWordContainer = () => {
    const dispatch = useAppDispatch();

    const [wordValueIsError, setWordValueIsError] = useState<boolean>(false);
    const [wordTranslationsIsError, setWordTranslationsIsError] = useState<boolean>(false);

    const wordValue = useAppSelector(state => selectWordValue(state));
    const numTranslations = useAppSelector(selectNumTranslationsAddedWord);
    const numExamples = useAppSelector(selectNumExamplesAddedWord);
    const emptyTranslationIdx = useAppSelector(selectEmptyTranslationIdx);
    const emptyExampleIdx = useAppSelector(selectEmptyExampleIdx);
    


    if (!numTranslations || !numExamples) return null;
    
    const saveWord = () => {
        if (wordValue !== undefined) {
            if (wordValue.length === 0) {
                setWordValueIsError(true);
            } else {
                dispatch(addWordThunk())
            }
        }
    }

    const addNewTranslation = () => {
        if (emptyTranslationIdx !== undefined) {
            if (emptyTranslationIdx === -1) {
                dispatch(dictionaryActions.addNewTranslation())
            } else {
                console.log(emptyTranslationIdx);
            }
        }        
    }

    return (
        <ModalDictionary
            wordValueIsError={wordValueIsError}
            wordTranslationsIsError={wordTranslationsIsError}
            setWordValueIsError={setWordValueIsError}
            setWordTranslationsIsError={setWordTranslationsIsError}
            numTranslations={numTranslations}
            numExamples={numExamples}
            addNewTranslation={addNewTranslation}
            addNewExampl={() => dispatch(dictionaryActions.addNewExample())}
            saveWord={saveWord}
        />
    )
}

export default AddWordContainer;