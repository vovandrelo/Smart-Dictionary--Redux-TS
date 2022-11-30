import { useEffect } from "react";
import Dictionary from "../../components/dictionary/dictionary";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getWordsThunk } from "../../store/modules/dictionary/middlewares/get-words-thunk";
import { selectDictionaryLoadingStatus, selectDictionaryResponseMessage, selectDictionaryWordsIds } from "../../store/modules/dictionary/selectors";
import { selectLoginStatus } from "../../store/modules/login/selectos";
import { useNavigate } from "react-router-dom";


const DictionaryContainer = () => {
    const dispatch = useAppDispatch();

    const loadingStatus = useAppSelector(selectDictionaryLoadingStatus);
    const responseMessage = useAppSelector(selectDictionaryResponseMessage);
    const isAuthorized = useAppSelector(selectLoginStatus);
    const wordsIds = useAppSelector(selectDictionaryWordsIds);
    const navigate = useNavigate();

    if (!isAuthorized) navigate("/auth");

    useEffect(() => {
        dispatch(getWordsThunk());
    }, []);

    

    return (
        <Dictionary wordsIds={wordsIds}/>
    )
}

export default DictionaryContainer;