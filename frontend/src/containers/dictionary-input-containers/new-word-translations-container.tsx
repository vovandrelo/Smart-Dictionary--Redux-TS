import InputPanel from "../../components/input-panel/input-panel";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { dictionaryActions } from "../../store/modules/dictionary";
import { selectTranslationValue } from "../../store/modules/dictionary/selectors";


interface PropsType {
    idxTranslation: number,
    externalStyles?: any,
    placeholder?: string,
}

const NewWordTranslationsContainer = (props: PropsType) => {
    const { idxTranslation, externalStyles, placeholder } = props;

    const dispatch = useAppDispatch();

    const translationValue = useAppSelector(state => selectTranslationValue(state, idxTranslation));

    const getInputValue = (value: string) => {
        dispatch(dictionaryActions.editTranslation({ newValue: value, idx: idxTranslation }))
    }

    return (
        <InputPanel
            placeholder={placeholder}
            externalStyles={externalStyles}
            getInputValue={getInputValue}
            value={translationValue}
        />
    )
}

export default NewWordTranslationsContainer;