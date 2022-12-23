import { ChangeEvent, useEffect, useMemo, useState } from "react";
import ThirdTrainingInterface from "../../../components/training-interfaces/training-interface-3/training-interface-3";
import { useAppSelector } from "../../../store/hooks";
import { selectLearnModuleWordTranslations, selectLearnModuleWordValue } from "../../../store/modules/learn/selectors";

interface PropsType {
    wordId: number,
    nextSlide: () => void,
    activeSlideIdx: number,
    slideIdx: number,
}


const ThirdTrainingContainer = (props: PropsType) => {
    const { wordId, nextSlide, activeSlideIdx, slideIdx } = props;

    const wordValue = useAppSelector(state => selectLearnModuleWordValue(state, wordId));
    const wordTranslations = useAppSelector(state => selectLearnModuleWordTranslations(state, wordId));

    const [inputValue, setInputValue] = useState<string>("");
    const [unselectedChars, setUnselectedChars] = useState(wordValue.split("").sort(() => Math.random() - 0.5));
    const [inputIsActive, setInputIsActive] = useState<boolean>(false);

    const slideIsActive = activeSlideIdx === slideIdx;
    
    const inputIsFinish: boolean = useMemo(() => {
        return unselectedChars.length === 0 ? true : false;
    }, [unselectedChars])

    const globalErrorStatus: boolean = useMemo(() => {
        return inputValue === wordValue  ? false : true;
    }, [inputValue, wordValue])

    const inputChangeHandler = (newInputValue: string) => {
        if (newInputValue.length > inputValue.length && !inputIsFinish) {
            const newChar = newInputValue.slice(inputValue.length);
            if (unselectedChars.includes(newChar)) {
                setInputValue(inputValue => {
                    const newInputValue = inputValue + newChar;
                    return newInputValue;
                });
                setUnselectedChars(unselectedChars => {
                    const idxInputChar = unselectedChars.indexOf(newChar);
                    const newUnselectedChars = unselectedChars.filter((char, i) => i !== idxInputChar)
                    return newUnselectedChars;
                });
            }
        } else if (newInputValue.length < inputValue.length && !inputIsFinish) {
            const deletedChar = inputValue.slice(inputValue.length - 1);
            setInputValue(newInputValue);
            setUnselectedChars(unselectedChars => {
                const newUnselectedChars = [...unselectedChars];
                newUnselectedChars.push(deletedChar);
                return newUnselectedChars;
            })
        }
    }

    const charClickHandler = (idxSelectChar: number) => {
        const selectedChar = unselectedChars[idxSelectChar];
        setUnselectedChars(unselectedChars => {
            const newUnselectedChars = unselectedChars.filter((char, i) => i !== idxSelectChar)
            return newUnselectedChars;
        })
        setInputValue(inputValue => {
            const newInputValue = inputValue + selectedChar;
            return newInputValue;
        })
    }

    const openNextSlide = () => {
        if (inputIsFinish) {
            setInputIsActive(false);
            nextSlide();
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
        <ThirdTrainingInterface
            inputValue={inputValue}
            wordValue={wordValue}
            translations={wordTranslations.join(", ")}
            unselectedChars={unselectedChars}
            inputIsFinish={inputIsFinish}
            globalErrorStatus={globalErrorStatus}
            inputIsActive={inputIsActive}
            openNextSlide={openNextSlide}
            charClickHandler={charClickHandler}
            inputChangeHandler={inputChangeHandler}
        />
    )
}

export default ThirdTrainingContainer;