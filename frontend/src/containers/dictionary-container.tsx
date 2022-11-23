import { useEffect } from "react";
import Dictionary from "../components/dictionary/dictionary";
import { useAppDispatch } from "../store/hooks";
import { getWordsThunk } from "../store/modules/collections/dictionary/middlewares/get-words-thunk";

const DictionaryContainer = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getWordsThunk());
    });

    return (
        <Dictionary/>
    )
}

export default DictionaryContainer;