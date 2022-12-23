import { useEffect, useMemo, useState } from "react";
import SecondTrainingInterface from "../../../components/training-interfaces/training-interface-2/training-interface-2";
import { useAppSelector } from "../../../store/hooks";
import { selectLearnModuleTranslations, selectLearnModuleValues, selectLearnModuleWordTranslations, selectLearnModuleWordValue } from "../../../store/modules/learn/selectors";

interface PropsType {
    wordId: number,
    nextSlide: () => void,
    activeSlideIdx: number,
    slideIdx: number,
}

const FifthTrainingContainer = (props: PropsType) => {
    const { wordId, nextSlide, activeSlideIdx, slideIdx } = props;

    const [translationIsSelect, setTranslationSelect] = useState<boolean>(false);
    const [selectedValues, setSelectedValues] = useState<string | null>(null);

    const allValues = useAppSelector(selectLearnModuleValues);
    const wordTranslations = useAppSelector(state => selectLearnModuleWordTranslations(state, wordId));
    const wordValue = useAppSelector(state => selectLearnModuleWordValue(state, wordId));

    const slideIsActive = activeSlideIdx === slideIdx;

    const optimazeAllValues = useMemo(() => {
        return [...allValues].sort(() => Math.random() - 0.5)
    }, [])
    
    const optimazeWordTranslations = useMemo(() => {
        return [...wordTranslations].sort(() => Math.random() - 0.5).join(", ");
    }, [wordTranslations])

    const selectHandler = (selectWordValue: string) => {
        if (translationIsSelect) return;
        setTranslationSelect(true);
        setSelectedValues(selectWordValue);
    }

    const openNextSlide = () => {
        if (translationIsSelect) {
            nextSlide();
            if (wordValue === selectedValues) {
                console.log("Правильно");
            } else {
                console.log("Не правильно!");
            }
        }
    }

    useEffect(() => {
        const keyDownHandler = (event: KeyboardEvent) => {
            if (event.code === "Enter") {
                openNextSlide();
            } else if (event.code === "Digit1") {
                selectHandler(optimazeAllValues[0]);
            } else if (event.code === "Digit2") {
                selectHandler(optimazeAllValues[1]);
            } else if (event.code === "Digit3") {
                selectHandler(optimazeAllValues[2]);
            } else if (event.code === "Digit4") {
                selectHandler(optimazeAllValues[3]);
            } else if (event.code === "Digit5") {
                selectHandler(optimazeAllValues[4]);
            }
        };

        if (slideIsActive) document.addEventListener("keydown", keyDownHandler);
        return () => document.removeEventListener("keydown", keyDownHandler)
    }, [translationIsSelect, activeSlideIdx])
    
    return (
        <SecondTrainingInterface
            mainValue={optimazeWordTranslations}
            answerVariants={optimazeAllValues}
            correctAnswerVariants={wordValue}
            selectedAnswerVariants={selectedValues}
            answerVariantIsSelected={translationIsSelect}
            selectHandler={selectHandler}
            openNextSlide={openNextSlide}
        />
    )
}

export default FifthTrainingContainer;