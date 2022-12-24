import { useMemo, useState } from "react";
import ModalDictionary from "../../components/modal-dictionary/modal-dictionary";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { dictionaryActions } from "../../store/modules/dictionary";
import { LOADING_STATUSES } from "../../store/constants/loading-statuses";
import { addWordThunk } from "../../store/modules/dictionary/middlewares/add-word-thunk";
import { selectModalNumExamples, selectModalNumTranslations, selectModalValue, selectModalTranslations, selectDictionaryLoadingStatus, selectModalWordType } from "../../store/modules/dictionary/selectors";
import { selectDictionarySavingStatus } from "../../store/modules/dictionary/selectors";
import { useNavigate } from "react-router-dom";
import { editWordThunk } from "../../store/modules/dictionary/middlewares/edit-word-thunk";

const ModalDictionaryContainer = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [wordValueIsError, setWordValueIsError] = useState<boolean>(false);
    const [wordTranslationsIsError, setWordTranslationsIsError] = useState<boolean>(false);

    const savingStatus = useAppSelector(selectDictionarySavingStatus);
    
    const wordType = useAppSelector(selectModalWordType);
    
    const wordValue = useAppSelector(state => selectModalValue(state));
    const wordTranslations = useAppSelector(state => selectModalTranslations(state));
    const numWordTranslations = useAppSelector(state => selectModalNumTranslations(state));
    const numWordExamples = useAppSelector(state => selectModalNumExamples(state));

    if (wordValue === undefined ||
        numWordTranslations === undefined ||
        numWordExamples === undefined ||
        wordTranslations === undefined ||
        wordType === undefined)
    return null;


    if (savingStatus === LOADING_STATUSES.success) {
        setTimeout(() => {
            dispatch(dictionaryActions.resetStatuses())
            dispatch(dictionaryActions.closeModal())
            navigate("/dictionary");
        }, 300)
    }
    if (savingStatus === LOADING_STATUSES.failed) {
        setTimeout(() => {
            dispatch(dictionaryActions.resetStatuses())
            dispatch(dictionaryActions.closeModal())
            navigate("/dictionary");
        }, 1000)
    }
    
    const saveWord = () => {        
        if (wordValue.length === 0 || (wordTranslations.includes("") && numWordTranslations === 1)) {
            setWordTranslationsIsError(wordTranslations.includes("") && numWordTranslations === 1);
            setWordValueIsError(wordValue.length === 0 ? true : false);
        }
        else {
            wordType === "added" ? dispatch(addWordThunk()) : dispatch(editWordThunk())
        }
    }

    return (
        <ModalDictionary
            savingStatus={savingStatus}
            wordValueIsError={wordValueIsError}
            wordTranslationsIsError={wordTranslationsIsError}
            setWordValueIsError={setWordValueIsError}
            setWordTranslationsIsError={setWordTranslationsIsError}
            numWordExamples={numWordExamples}
            numWordTranslations={numWordTranslations}
            addNewTranslation={() => dispatch(dictionaryActions.addNewTranslation())}
            addNewExampl={() => dispatch(dictionaryActions.addNewExample())}
            saveWord={saveWord}
        />
    )
}

export default ModalDictionaryContainer;