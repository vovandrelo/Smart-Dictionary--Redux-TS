import { useState } from "react";
import Word from "../components/word/word";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { dictionaryActions } from "../store/modules/dictionary";
import { selectDictionaryWordById } from "../store/modules/dictionary/selectors";
import { useNavigate } from "react-router-dom";


interface PropsType {
    wordId: number,
}


const WordContainer = (props: PropsType) => {
    const { wordId } = props;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const word = useAppSelector(state => selectDictionaryWordById(state, wordId));
    const [examplesIsVisible, setExamplesIsVisible] = useState<boolean>(false);

    const showExample = (event: React.MouseEvent) => {
        event.preventDefault();
        setExamplesIsVisible(examplesIsVisible => !examplesIsVisible);
    }

    const editWord = () => {        
        dispatch(dictionaryActions.openModal({wordType: "editable", wordId}));
        navigate(`edit/${wordId}`);
    }
    
    return (
        <Word
            wordData={word}
            examplesIsVisible={examplesIsVisible}
            showExample={showExample}
            editWord={editWord}
        />
    )
}

export default WordContainer;