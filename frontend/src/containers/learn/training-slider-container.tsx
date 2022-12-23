
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import TrainingSlider from "../../components/traning-slider/training-slider";
import { selectLearnModuleIds, selectLearnModuleTrainingStage } from "../../store/modules/learn/selectors";
import { learnActions } from "../../store/modules/learn";

const TrainingSliderContainer = () => {
    const dispatch = useAppDispatch();

    const wordsIds = useAppSelector(selectLearnModuleIds);
    const trainingStage = useAppSelector(selectLearnModuleTrainingStage);

    const trainingStageUp = () => {
        dispatch(learnActions.trainingStageUp());
    }

    return (
        <TrainingSlider
            wordsIds={wordsIds}
            trainingStage={trainingStage}
            trainingStageUp={trainingStageUp}
        />
    )
}

export default TrainingSliderContainer;