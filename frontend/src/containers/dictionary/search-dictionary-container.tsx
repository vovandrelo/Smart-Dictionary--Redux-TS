import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { dictionaryActions } from "../../store/modules/dictionary";
import InputPanel from "../../components/input-panel/input-panel";
import { useState } from "react";
import Plus from "../../components/icons/plus/plus";

const SearchDictionaryContainer = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [searchValue, setSearchValue] = useState<string>("");

    const changeSearchHandler = (newSearchValue: string) => {
        setSearchValue(newSearchValue);
    }

    const openModal = () => {
        dispatch(dictionaryActions.openModal({wordType: "added"}));
        navigate("create");
    }


    return (
        <InputPanel
            inputValue={searchValue}
            setInputValue={changeSearchHandler}
            placeholder="Поиск слов..."
            icon={<Plus clickHandler={openModal}/>}
        />
    )
}

export default SearchDictionaryContainer;


// <SearchDictionary addNewWord={openModal}/>