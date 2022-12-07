import TrainingSliderContainer from "../../containers/learn/training-slider-container";


interface PropsType {
    wordsIds: number[],
}


const Learn = (props: PropsType) => {
    const { wordsIds } = props;
    return (
        <TrainingSliderContainer/>
    )
}

export default Learn; 