
import InputPanel from "../../components/input-panel/input-panel";
import { useAppDispatch } from "../../store/hooks";
import { dictionaryActions } from "../../store/modules/dictionary";

interface PropsType {
    idxExample: number,
    externalStyles?: any,
    placeholder?: string,
}

const NewWordExamplesContainer = (props: PropsType) => {
    const { idxExample, externalStyles, placeholder } = props;

    const dispatch = useAppDispatch();

    const getInputValue = (value: string) => {
        dispatch(dictionaryActions.editExample({ newValue: value, idx: idxExample, wordType: "added" }))
    }

    return (
        <InputPanel
            placeholder={placeholder}
            externalStyles={externalStyles}
            getInputValue={getInputValue}
        />
    )
}

export default NewWordExamplesContainer;