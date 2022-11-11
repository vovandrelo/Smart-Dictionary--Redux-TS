import React from "react";
import SearchDictionary from "../components/search-dictionary/search-dictionary";
import { useNavigate } from "react-router-dom";


const SearchDictionaryContainer = () => {
    const navigate = useNavigate();

    return (
        <SearchDictionary navigate={navigate}/>
    )
}

export default SearchDictionaryContainer;