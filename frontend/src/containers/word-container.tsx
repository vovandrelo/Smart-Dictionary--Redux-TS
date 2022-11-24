import { useState } from "react";
import Word from "../components/word/word";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectDictionaryWordById } from "../store/modules/dictionary/selectors";

interface PropsType {
    wordId: number,
}


const WordContainer = (props: PropsType) => {
    const { wordId } = props;

    const word = useAppSelector(state => selectDictionaryWordById(state, wordId));
    const [examplesIsVisible, setExamplesIsVisible] = useState<boolean>(false);

    const showExample = (event: React.MouseEvent) => {
        event.preventDefault();
        setExamplesIsVisible(examplesIsVisible => !examplesIsVisible);
    }
    
    return (
        <Word wordData={word} examplesIsVisible={examplesIsVisible} showExample={showExample}/>
    )
}

export default WordContainer;