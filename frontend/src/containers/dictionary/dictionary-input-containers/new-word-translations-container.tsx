import InputPanel from "../../../components/input-panel/input-panel";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { dictionaryActions } from "../../../store/modules/dictionary";
import { selectTranslationValue } from "../../../store/modules/dictionary/selectors";
import Error from "../../../components/icons/error/error";

interface PropsType {
    idxTranslation: number,
    externalStyles?: any,
}

const NewWordTranslationsContainer = (props: PropsType) => {
    const { idxTranslation, externalStyles } = props;

    const dispatch = useAppDispatch();

    const translationValue = useAppSelector(state => selectTranslationValue(state, idxTranslation));

    const setTranslationValue = (value: string) => {
        dispatch(dictionaryActions.editTranslation({ newValue: value, idx: idxTranslation }));
    }

    if (translationValue === undefined) return null;

    return (
        <InputPanel
            inputValue={translationValue}
            setInputValue={setTranslationValue}
            externalStyles={externalStyles}
            placeholder="Выберите или введите перевод"
        />
    )
}

export default NewWordTranslationsContainer;