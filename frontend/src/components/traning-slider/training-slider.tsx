import classNames from "classnames";
import { useEffect, useState } from "react";
import { transform } from "typescript";
import FirstTrainingContainer from "../../containers/learn/training-interfaces-containers/training-1-container";
import style from "./training-slider.module.sass";
import SecondTrainingContainer from "../../containers/learn/training-interfaces-containers/training-2-container";
import ThirdTrainingContainer from "../../containers/learn/training-interfaces-containers/training-3-container";
import FourthTrainingContainer from "../../containers/learn/training-interfaces-containers/training-4-container";
import FifthTrainingContainer from "../../containers/learn/training-interfaces-containers/training-5-container";

interface PropsType {
    wordsIds: number[],
    trainingStage: number,
    trainingStageUp: () => void,
}

const TrainingSlider = (props: PropsType) => {
    const { wordsIds, trainingStage, trainingStageUp } = props;

    const [showTraining, setShowTraining] = useState(true);
    const [numSlide, setNumSlide] = useState(0);
    
    const openNextSlide = () => {
        if (numSlide < wordsIds.length - 1) {
            setNumSlide(numSlide => numSlide + 1);
        } else {
            setShowTraining(false);
            setTimeout(() => {
                setNumSlide(0);
            }, 300)
            setTimeout(() => {
                trainingStageUp();
                setShowTraining(true);
            }, 400)
        }
    }
    

    const firstTrainingContainer = () => {
        return (
            <div className={classNames(style["root"], { [style["show"]]: showTraining })}>
                <div className={style["inner"]} style={{transform: `translate(-${numSlide * 1078}px, 0px)`}}>
                    {wordsIds.map((wordId, i) =>
                        <FirstTrainingContainer
                            wordId={wordId}
                            key={wordId}
                            nextSlide={openNextSlide}
                            activeSlideIdx={numSlide}
                            slideIdx={i}
                        />
                    )}
                </div>
            </div>
        )
    }

    const secondTrainingContainer = () => {
        return (
            <div className={classNames(style["root"], { [style["show"]]: showTraining })}>
                <div className={style["inner"]} style={{transform: `translate(-${numSlide * 1078}px, 0px)`}}>
                    {wordsIds.map((wordId, i) =>
                        <SecondTrainingContainer
                            wordId={wordId}
                            key={wordId}
                            nextSlide={openNextSlide}
                            activeSlideIdx={numSlide}
                            slideIdx={i}
                        />
                    )}
                </div>
            </div>
        )
    }

    const thirdTrainingContainer = () => {
        return (
            <div className={classNames(style["root"], { [style["show"]]: showTraining })}>
                <div className={style["inner"]} style={{transform: `translate(-${numSlide * 1078}px, 0px)`}}>
                    {wordsIds.map((wordId, i) => 
                        <ThirdTrainingContainer
                            wordId={wordId}
                            key={wordId}
                            nextSlide={openNextSlide}
                            activeSlideIdx={numSlide}
                            slideIdx={i}
                        />
                    )}
                </div>
            </div>
        )
    }

    const fourthTrainingContainer = () => {
        return (
            <div className={classNames(style["root"], { [style["show"]]: showTraining })}>
                <div className={style["inner"]} style={{transform: `translate(-${numSlide * 1078}px, 0px)`}}>
                    {wordsIds.map((wordId, i) =>
                        <FourthTrainingContainer
                            wordId={wordId}
                            key={wordId}
                            nextSlide={openNextSlide}
                            activeSlideIdx={numSlide}
                            slideIdx={i}
                        />
                    )}
                </div>
            </div>
        )
    }

    const fifthTrainingContainer = () => {
        return (
            <div className={classNames(style["root"], { [style["show"]]: showTraining })}>
                <div className={style["inner"]} style={{transform: `translate(-${numSlide * 1078}px, 0px)`}}>
                    {wordsIds.map((wordId, i) =>
                        <FifthTrainingContainer
                            wordId={wordId}
                            key={wordId}
                            nextSlide={openNextSlide}
                            activeSlideIdx={numSlide}
                            slideIdx={i}
                        />
                    )}
                </div>
            </div>
        )
    }

    return (
        <>
            {/* {firstTrainingContainer()} */}
            {/* {secondTrainingContainer()} */}
            {/* {thirdTrainingContainer()} */}
            {/* {fourthTrainingContainer()} */}
            {/* {fifthTrainingContainer()} */}
            {trainingStage === 0 ? firstTrainingContainer() : null}
            {trainingStage === 1 ? secondTrainingContainer() : null}
            {trainingStage === 2 ? thirdTrainingContainer() : null}
            {trainingStage === 3 ? fourthTrainingContainer() : null}
            {trainingStage === 4 ? fifthTrainingContainer() : null}
        </>
    )
}

export default TrainingSlider;