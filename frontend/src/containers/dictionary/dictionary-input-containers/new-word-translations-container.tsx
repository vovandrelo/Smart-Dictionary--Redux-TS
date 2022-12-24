import InputPanel from "../../../components/input-panel/input-panel";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { dictionaryActions } from "../../../store/modules/dictionary";
import { selectModalTranslationByIdx } from "../../../store/modules/dictionary/selectors";
import Error from "../../../components/icons/error/error";

interface PropsType {
    idxTranslation: number,
    externalStyles?: any,
    wordTranslationsIsError: boolean,
    setWordTranslationsIsError: (wordTranslationsIsError: boolean) => void,
}

const NewWordTranslationsContainer = (props: PropsType) => {
    const { idxTranslation, externalStyles, wordTranslationsIsError, setWordTranslationsIsError } = props;

    const dispatch = useAppDispatch();

    const translationValue = useAppSelector(state => selectModalTranslationByIdx(state, idxTranslation));

    const setTranslationValue = (value: string) => {
        setWordTranslationsIsError(false);
        dispatch(dictionaryActions.editTranslation({ newValue: value, idx: idxTranslation }));
    }

    if (translationValue === undefined) return null;

    return (
        <InputPanel
            inputValue={translationValue}
            setInputValue={setTranslationValue}
            externalStyles={externalStyles}
            placeholder="Выберите или введите перевод"
            icon={wordTranslationsIsError ? <Error/> : null}
        />
    )
}

export default NewWordTranslationsContainer;