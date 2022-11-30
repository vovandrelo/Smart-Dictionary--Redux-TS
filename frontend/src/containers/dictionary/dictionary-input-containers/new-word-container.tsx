import InputPanel from "../../../components/input-panel/input-panel";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { dictionaryActions } from "../../../store/modules/dictionary";
import { selectWordValue } from "../../../store/modules/dictionary/selectors";

interface PropsType {
    externalStyles?: any,
    placeholder?: string,
}

const NewWordContainer = (props: PropsType) => {
    const { externalStyles, placeholder } = props;

    const dispatch = useAppDispatch();

    const wordValue = useAppSelector(state => selectWordValue(state));

    const getInputValue = (value: string) => {
        dispatch(dictionaryActions.editWordValue({ newValue: value }))
    }

    return (
        <InputPanel
            placeholder={placeholder}
            externalStyles={externalStyles}
            getInputValue={getInputValue}
            value={wordValue}
        />
    )
}

export default NewWordContainer;