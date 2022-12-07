import Container from "../components/container/container";
import TrainingFirstStage from "../components/training-interfaces/training-interface-1/training-interface-1";
import TrainingSecondStage from "../components/training-interfaces/training-interface-2/training-interface-2";
import TrainingThirdStage from "../components/training-interfaces/training-interface-3/training-interface-3";
import TrainingFourthStage from "../components/training-interfaces/training-interface-4/training-interface-4";
import LearnContainer from "../containers/learn/learn-container";
import FirstTrainingContainer from "../containers/learn/training-interfaces-containers/training-1-container";
import TrainingSliderContainer from "../containers/learn/training-slider-container";

const LearnPage = () => {
    return (
        <Container>
            <LearnContainer/>
            {/* <TrainingFirstStage/> */}
            {/* <TrainingSecondStage/> */}
            {/* <TrainingThirdStage/> */}
            {/* <TrainingFourthStage/> */}
        </Container>
    )
}

export default LearnPage;