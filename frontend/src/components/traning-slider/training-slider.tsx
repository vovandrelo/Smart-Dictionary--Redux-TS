import classNames from "classnames";
import { useEffect, useState } from "react";
import { transform } from "typescript";
import FirstTrainingContainer from "../../containers/learn/training-interfaces-containers/training-1-container";
import style from "./training-slider.module.sass";

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

    /* useEffect(() => {
        setShowTraining(true);
    }, []) */

    const firstTrainingContainer = () => {
        return (
            <div className={classNames(style["root"], { [style["show"]]: showTraining })}>
                <div className={style["inner"]} style={{transform: `translate(-${numSlide * 1078}px, 0px)`}}>
                    {wordsIds.map(wordId =>
                        <FirstTrainingContainer
                            wordId={wordId}
                            key={wordId}
                            nextSlide={openNextSlide}
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
                    {wordsIds.map(wordId =>
                        <FirstTrainingContainer
                            wordId={wordId}
                            key={wordId}
                            nextSlide={openNextSlide}
                        />
                    )}
                </div>
            </div>
        )
    }

    const thirdTrainingContainer = () => {
        
    }

    const fourthTrainingContainer = () => {
        
    }

    const fifthTrainingContainer = () => {
        
    }

    return (
        <>
            {trainingStage === 0 ? firstTrainingContainer() : null}
            {trainingStage === 1 ? secondTrainingContainer() : null}
            {trainingStage === 2 ? null : null}
            {trainingStage === 3 ? null : null}
            {trainingStage === 4 ? null : null}
        </>
    )
}

export default TrainingSlider;