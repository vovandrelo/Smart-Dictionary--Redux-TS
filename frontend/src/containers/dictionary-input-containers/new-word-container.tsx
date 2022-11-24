import InputPanel from "../../components/input-panel/input-panel";
import { useAppDispatch } from "../../store/hooks";
import { dictionaryActions } from "../../store/modules/dictionary";

interface PropsType {
    externalStyles?: any,
    placeholder?: string,
}

const NewWordContainer = (props: PropsType) => {
    const { externalStyles, placeholder } = props;

    const dispatch = useAppDispatch();

    const getInputValue = (value: string) => {
        dispatch(dictionaryActions.editAddedWord({newValue: value, wordType: "added"}))
    }

    return (
        <InputPanel
            placeholder={placeholder}
            externalStyles={externalStyles}
            getInputValue={getInputValue}
        />
    )
}

export default NewWordContainer;