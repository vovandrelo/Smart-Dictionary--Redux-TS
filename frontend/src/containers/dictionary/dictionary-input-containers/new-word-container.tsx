import classNames from "classnames";
import { useState } from "react";
import InputPanel from "../../../components/input-panel/input-panel";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { dictionaryActions } from "../../../store/modules/dictionary";
import { selectWordValue } from "../../../store/modules/dictionary/selectors";
import Error from "../../../components/icons/error/error";

interface PropsType {
    wordValueIsError: boolean,
    setWordValueIsError: (wordValueIsError: boolean) => void,
    externalStyles?: any,
}

const NewWordContainer = (props: PropsType) => {
    const { wordValueIsError, setWordValueIsError, externalStyles } = props;

    const dispatch = useAppDispatch();

    const wordValue = useAppSelector(state => selectWordValue(state));

    const [wordValueIsEmpty, setWordValueIsEmpty] = useState<boolean>(true);

    const setWordValue = (value: string) => {
        setWordValueIsError(false);
        dispatch(dictionaryActions.editWordValue({ newValue: value }))
    }

    if (wordValue  === undefined) return null;

    return (
        <InputPanel
            inputValue={wordValue}
            setInputValue={setWordValue}
            placeholder="Введите английское слово"
            externalStyles={externalStyles}
            icon={wordValueIsError ? <Error/> : null}
        />
    )
}

export default NewWordContainer;