import React from "react";
import SearchDictionary from "../components/search-dictionary/search-dictionary";
import { useAppDispatch } from "../store/hooks";
import { dictionaryActions } from "../store/modules/collections/dictionary";

const SearchDictionaryContainer = () => {
    const dispatch = useAppDispatch();

    const addNewWord = (event: React.MouseEvent) => {
        dispatch(dictionaryActions.updateStateModal());
    }

    return (
        <SearchDictionary addNewWord={addNewWord}/>
    )
}

export default SearchDictionaryContainer;