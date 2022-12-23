import { useEffect, useMemo, useState } from "react";
import FourthTrainingInterface from "../../../components/training-interfaces/training-interface-4/training-interface-4";
import { useAppSelector } from "../../../store/hooks";
import { selectLearnModuleWordTranslations, selectLearnModuleWordValue } from "../../../store/modules/learn/selectors";

interface PropsType {
    wordId: number,
    nextSlide: () => void,
    activeSlideIdx: number,
    slideIdx: number,
}


const FourthTrainingContainer = (props: PropsType) => {
    const { wordId, nextSlide, activeSlideIdx, slideIdx } = props;

    const wordValue = useAppSelector(state => selectLearnModuleWordValue(state, wordId));
    const wordTranslations = useAppSelector(state => selectLearnModuleWordTranslations(state, wordId));

    const [inputValue, setInputValue] = useState<string>("");
    const [inputIsActive, setInputIsActive] = useState<boolean>(false);
    const [inputIsFinish, setInputIsFinish] = useState(false);

    const slideIsActive = activeSlideIdx === slideIdx;

    const globalErrorStatus: boolean = useMemo(() => {
        return inputValue === wordValue  ? false : true;
    }, [inputValue, wordValue])


    const inputChangeHandler = (newInputValue: string) => {
        if (!inputIsFinish) {
            setInputValue(newInputValue);
            if (newInputValue === wordValue) {
                setInputIsFinish(true);
            }
        }
    }

    const openNextSlide = () => {
        if (inputIsFinish) {
            nextSlide();
        } else {
            setInputIsFinish(true);
        }
    }

    useEffect(() => {
        if (slideIsActive) {
            setTimeout(() => {
                setInputIsActive(true);
            }, 500)
        }  
    }, [slideIsActive])

    useEffect(() => {
        const keyDownHandler = (event: KeyboardEvent) => {
            if (event.code === "Enter") {
                openNextSlide();
            } else if (event.code === "Tab") {
                event.preventDefault();
            }
        };

        if (slideIsActive) document.addEventListener("keydown", keyDownHandler);
        return () => document.removeEventListener("keydown", keyDownHandler)
    }, [globalErrorStatus, activeSlideIdx, inputIsFinish])

    return (
        <FourthTrainingInterface
            inputValue={inputValue}
            wordValue={wordValue}
            translations={wordTranslations.join(", ")}
            inputIsFinish={inputIsFinish}
            globalErrorStatus={globalErrorStatus}
            inputIsActive={inputIsActive}
            openNextSlide={openNextSlide}
            inputChangeHandler={inputChangeHandler}
        />
    )
}

export default FourthTrainingContainer;