import InputPanel from "../../components/input-panel/input-panel";
import { useAppDispatch } from "../../store/hooks";
import { dictionaryActions } from "../../store/modules/dictionary";

interface PropsType {
    idxTranslation: number,
    externalStyles?: any,
    placeholder?: string,
}

const NewWordTranslationsContainer = (props: PropsType) => {
    const { idxTranslation, externalStyles, placeholder } = props;

    const dispatch = useAppDispatch();

    const getInputValue = (value: string) => {
        dispatch(dictionaryActions.editTranslation({newValue: value, idx: idxTranslation, wordType: "added"}))
    }

    return (
        <InputPanel
            placeholder={placeholder}
            externalStyles={externalStyles}
            getInputValue={getInputValue}
        />
    )
}

export default NewWordTranslationsContainer;