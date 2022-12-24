import { useEffect } from "react";
import Dictionary from "../../components/dictionary/dictionary";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getWordsThunk } from "../../store/modules/dictionary/middlewares/get-words-thunk";
import { selectDictionaryLoadingStatus, selectDictionaryResponseMessage, selectDictionaryWordsIds, selectModalIsOpen } from "../../store/modules/dictionary/selectors";
import { selectLoginStatus } from "../../store/modules/login/selectos";
import { useNavigate } from "react-router-dom";


const DictionaryContainer = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const modalIsOpen = useAppSelector(selectModalIsOpen);
    const loadingStatus = useAppSelector(selectDictionaryLoadingStatus);
    const responseMessage = useAppSelector(selectDictionaryResponseMessage);
    const isAuthorized = useAppSelector(selectLoginStatus);
    const wordsIds = useAppSelector(selectDictionaryWordsIds);

    if (!isAuthorized) navigate("/auth");

    useEffect(() => {
        if (!modalIsOpen) dispatch(getWordsThunk());
    }, [modalIsOpen]);

    return (
        <Dictionary wordsIds={wordsIds}/>
    )
}

export default DictionaryContainer;