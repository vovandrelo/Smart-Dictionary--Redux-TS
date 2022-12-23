import { useEffect, useMemo, useState } from "react";
import FirstTrainingInterface from "../../../components/training-interfaces/training-interface-1/training-interface-1";
import { useAppSelector } from "../../../store/hooks";
import { selectLearnWordById } from "../../../store/modules/learn/selectors";

interface PropsType {
    wordId: number,
    nextSlide: () => void,
    activeSlideIdx: number,
    slideIdx: number,
}

const FirstTrainingContainer = (props: PropsType) => {
    const { wordId, nextSlide, activeSlideIdx, slideIdx } = props;

    const word = useAppSelector(state => selectLearnWordById(state, wordId));

    const [inputValues, setInputValues] = useState<string[]>(["", "", ""]);
    const [inputsActiveStatus, setInputsActiveStatus] = useState<boolean[]>([false, false, false]);
    const [errorMessageIsView, setErrorMessageIsView] = useState<boolean>(false);

    const slideIsActive = activeSlideIdx === slideIdx;

    const inputValuesErrorStatus = useMemo(() => {
        const newInputValuesErrorStatus = inputValues.map(inputValue => inputValue === word.value ? false : true);
        return newInputValuesErrorStatus;
    }, [inputValues])

    const inputValuesEmptyStatus = useMemo(() => {
        const newInputValuesEmptyStatus = inputValues.map(inputValue => inputValue.length === 0 ? true : false);
        return newInputValuesEmptyStatus;
    }, [inputValues])

    const globalErrorStatus = useMemo(() => {
        return inputValuesErrorStatus.includes(true);
    }, [inputValuesErrorStatus])

    const inputChangeHandler = (inputIdx: number, newInputValue: string) => {
        setInputValues(inputValues => {
            const newInputValues = [...inputValues];
            newInputValues[inputIdx] = newInputValue;
            return newInputValues;
        })
    }

    const inputFocusHandler = (focusInputIdx: number) => {
        setInputsActiveStatus(inputsActiveStatus => {
            const newInputsActiveStatus = [...inputsActiveStatus];
            newInputsActiveStatus[focusInputIdx] = true;
            return newInputsActiveStatus;
        })
    }

    const inputBlureHandler = (blureInputIdx: number) => {
        setInputsActiveStatus(inputsActiveStatus => {
            const newInputsActiveStatus = [...inputsActiveStatus];
            newInputsActiveStatus[blureInputIdx] = false;
            return newInputsActiveStatus;
        })
    }

    const openNextSlide = () => {
        if (globalErrorStatus) {
            setErrorMessageIsView(true);
        } else {
            setErrorMessageIsView(false);
            nextSlide();
        }
    }

    useEffect(() => {
        if (activeSlideIdx === slideIdx) {
            setTimeout(() => {
                inputFocusHandler(0);
            }, 500)
        }  
    }, [activeSlideIdx])

    useEffect(() => {
        const keyDownHandler = (event: KeyboardEvent) => {
            if (event.code === "Enter") {
                openNextSlide();
            } else if (event.code === "ArrowUp") {
                const activeInputIdx = inputsActiveStatus.indexOf(true);
                if (activeInputIdx !== -1 && activeInputIdx > 0) {
                    inputFocusHandler(activeInputIdx - 1);
                    inputBlureHandler(activeInputIdx);
                }
            } else if (event.code === "ArrowDown" || event.code === "Tab") {
                event.preventDefault();
                const activeInputIdx = inputsActiveStatus.indexOf(true);
                if (activeInputIdx !== -1 && activeInputIdx < 2) {
                    inputFocusHandler(activeInputIdx + 1);
                    inputBlureHandler(activeInputIdx);
                }
            }
        };

        if (slideIsActive) document.addEventListener("keydown", keyDownHandler);
        return () => document.removeEventListener("keydown", keyDownHandler)
    }, [globalErrorStatus, activeSlideIdx, inputsActiveStatus])

    return (
        <FirstTrainingInterface
            word={word}
            inputValues={inputValues}
            globalErrorStatus={globalErrorStatus}
            slideIsActive={slideIsActive}
            errorMessageIsView={errorMessageIsView}
            inputValuesEmptyStatus={inputValuesEmptyStatus}
            inputsActiveStatus={inputsActiveStatus}
            inputValuesErrorStatus={inputValuesErrorStatus}
            openNextSlide={openNextSlide}
            inputChangeHandler={inputChangeHandler}
            inputFocusHandler={inputFocusHandler}
            inputBlureHandler={inputBlureHandler}
        />
    )
}

export default FirstTrainingContainer;