import { useEffect, useMemo, useState } from "react";
import SecondTrainingInterface from "../../../components/training-interfaces/training-interface-2/training-interface-2";
import { useAppSelector } from "../../../store/hooks";
import { selectLearnModuleTranslations, selectLearnModuleWordTranslations, selectLearnModuleWordValue } from "../../../store/modules/learn/selectors";

interface PropsType {
    wordId: number,
    nextSlide: () => void,
    activeSlideIdx: number,
    slideIdx: number,
}

const SecondTrainingContainer = (props: PropsType) => {
    const { wordId, nextSlide, activeSlideIdx, slideIdx } = props;

    const [valueIsSelect, setValueSelect] = useState<boolean>(false);
    const [selectedTranslations, setSelectedTranslations] = useState<string | null>(null);

    const allTranslations = useAppSelector(selectLearnModuleTranslations);
    const wordValue = useAppSelector(state => selectLearnModuleWordValue(state, wordId));
    const wordTranslations = useAppSelector(state => selectLearnModuleWordTranslations(state, wordId));

    const slideIsActive = activeSlideIdx === slideIdx;

    const optimazeAllTranslations = useMemo(() => {
        return [...allTranslations].map(translation => translation.join(", ")).sort(() => Math.random() - 0.5);
    }, [allTranslations])
    
    const optimazeWordTranslations = useMemo(() => {
        return [...wordTranslations].sort(() => Math.random() - 0.5).join(", ");
    }, [wordTranslations])

    const selectHandler = (selectWordTranslations: string) => {
        if (valueIsSelect) return;
        setValueSelect(true);
        setSelectedTranslations(selectWordTranslations);
    }

    const openNextSlide = () => {
        if (valueIsSelect) {
            nextSlide();
            if (selectedTranslations === optimazeWordTranslations) {
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
                selectHandler(optimazeAllTranslations[0]);
            } else if (event.code === "Digit2") {
                selectHandler(optimazeAllTranslations[1]);
            } else if (event.code === "Digit3") {
                selectHandler(optimazeAllTranslations[2]);
            } else if (event.code === "Digit4") {
                selectHandler(optimazeAllTranslations[3]);
            } else if (event.code === "Digit5") {
                selectHandler(optimazeAllTranslations[4]);
            }
        };

        if (slideIsActive) document.addEventListener("keydown", keyDownHandler);
        return () => document.removeEventListener("keydown", keyDownHandler)
    }, [valueIsSelect, activeSlideIdx])
    
    return (
        <SecondTrainingInterface
            mainValue={wordValue}
            answerVariants={optimazeAllTranslations}
            correctAnswerVariants={optimazeWordTranslations}
            selectedAnswerVariants={selectedTranslations}
            answerVariantIsSelected={valueIsSelect}
            selectHandler={selectHandler}
            openNextSlide={openNextSlide}
        />
    )
}

export default SecondTrainingContainer;