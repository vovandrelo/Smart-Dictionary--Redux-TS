import { useState } from "react";
import FirstTrainingInterface from "../../../components/training-interfaces/training-interface-1/training-interface-1";
import { useAppSelector } from "../../../store/hooks";
import { selectLearnWordById } from "../../../store/modules/learn/selectors";

interface PropsType {
    wordId: number,
    nextSlide: () => void,
}

const FirstTrainingContainer = (props: PropsType) => {
    const { wordId, nextSlide } = props;

    const [inputsError, setInputsError] = useState<boolean[]>([true, true, true]);
    const [commonError, setCommonError] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<boolean>(false);

    const word = useAppSelector(state => selectLearnWordById(state, wordId));

    const checkInputs = (numExample: number, value: string) => {
        setInputsError(inputsError => {
            const newInputsError = [...inputsError];
            if (value !== word.value) {
                newInputsError[numExample] = true;
            } else {
                newInputsError[numExample] = false;
            }
            const newCommonError = newInputsError.includes(true) ? true : false;
            if (newCommonError === false) setErrorMessage(false);
            setCommonError(newCommonError);
            return newInputsError;
        });
    }

    const clickHandler = () => {
        if (!commonError) {
            nextSlide();
        } else {
            setErrorMessage(true);
        }
    }

    return (
        <FirstTrainingInterface
            word={word}
            nextSlide={clickHandler}
            checkInputs={checkInputs}
            inputsError={inputsError}
            commonError={commonError}
            errorMessage={errorMessage}
        />
    )
}

export default FirstTrainingContainer;