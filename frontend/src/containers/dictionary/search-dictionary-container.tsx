import SearchDictionary from "../../components/search-dictionary/search-dictionary";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { dictionaryActions } from "../../store/modules/dictionary";

const SearchDictionaryContainer = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const openModal = () => {
        dispatch(dictionaryActions.openModal({wordType: "added"}));
        navigate("create");
    }

    return (
        <SearchDictionary addNewWord={openModal}/>
    )
}

export default SearchDictionaryContainer;