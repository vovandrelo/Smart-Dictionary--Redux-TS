
import InputPanel from "../../../components/input-panel/input-panel";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { dictionaryActions } from "../../../store/modules/dictionary";
import { selectExampleValue } from "../../../store/modules/dictionary/selectors";


interface PropsType {
    idxExample: number,
    externalStyles?: any,
}

const NewWordExamplesContainer = (props: PropsType) => {
    const { idxExample, externalStyles } = props;

    const dispatch = useAppDispatch();

    const exampleValue = useAppSelector(state => selectExampleValue(state, idxExample));

    const setExampleValue = (value: string) => {
        dispatch(dictionaryActions.editExample({ newValue: value, idx: idxExample }))
    }

    if (exampleValue === undefined) return null;

    return (
        <InputPanel
            inputValue={exampleValue}
            setInputValue={setExampleValue}
            externalStyles={externalStyles}
            placeholder="Введите примеры использования"
        />
    )
}

export default NewWordExamplesContainer;