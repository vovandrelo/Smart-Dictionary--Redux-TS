
import InputPanel from "../../../components/input-panel/input-panel";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { dictionaryActions } from "../../../store/modules/dictionary";
import { selectExampleValue } from "../../../store/modules/dictionary/selectors";


interface PropsType {
    idxExample: number,
    externalStyles?: any,
    placeholder?: string,
}

const NewWordExamplesContainer = (props: PropsType) => {
    const { idxExample, externalStyles, placeholder } = props;

    const dispatch = useAppDispatch();

    const exampleValue = useAppSelector(state => selectExampleValue(state, idxExample));

    const getInputValue = (value: string) => {
        dispatch(dictionaryActions.editExample({ newValue: value, idx: idxExample }))
    }

    return (
        <InputPanel
            placeholder={placeholder}
            externalStyles={externalStyles}
            getInputValue={getInputValue}
            value={exampleValue}
        />
    )
}

export default NewWordExamplesContainer;