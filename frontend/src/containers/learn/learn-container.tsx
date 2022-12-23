import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getWordsThunk } from "../../store/modules/learn/middlewares/get-words-thunk";
import { selectLearnModuleIds } from "../../store/modules/learn/selectors";
import Learn from "../../components/learn/learn";
import TrainingSliderContainer from "./training-slider-container";


const LearnContainer = () => {
    const dispatch = useAppDispatch();

    const learnWordsIds = useAppSelector(selectLearnModuleIds);    

    useEffect(() => {
        dispatch(getWordsThunk());
    }, [])


    return (
        <TrainingSliderContainer/>
    )
}

export default LearnContainer;