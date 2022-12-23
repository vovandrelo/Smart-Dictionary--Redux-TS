import InputPanel from "../../input-panel/input-panel";
import classNames from "classnames";
import ButtonNext from "../../button-next/button-next";
import Error from "../../icons/error/error";
import Accept from "../../icons/accept/accept";

import style from "./training-interface-1.module.sass";
import { DictionaryWord } from "../../../store/modules/dictionary";

interface PropsType {
    word: DictionaryWord,
    inputValues: string[],
    globalErrorStatus: boolean,
    errorMessageIsView: boolean,
    slideIsActive: boolean,
    inputValuesEmptyStatus: boolean[],
    inputsActiveStatus: boolean[],
    inputValuesErrorStatus: boolean[],
    openNextSlide: () => void,
    inputChangeHandler: (numExample: number, value: string) => void,
    inputFocusHandler: (focusInputIdx: number) => void,
    inputBlureHandler: (blureInputIdx: number) => void,
}

const FirstTrainingInterface = (props: PropsType) => {
    const { 
        word,
        inputValues,
        globalErrorStatus,
        slideIsActive,
        errorMessageIsView,
        inputValuesEmptyStatus,
        inputsActiveStatus,
        inputValuesErrorStatus,
        openNextSlide,
        inputChangeHandler,
        inputFocusHandler,
        inputBlureHandler,
    } = props;

    const selectIconView = (inputIdx: number) => {
        if (inputValuesErrorStatus[inputIdx] && !inputValuesEmptyStatus[inputIdx] && !inputsActiveStatus[inputIdx] ) {
            return <Error/>;
        } else if (!inputValuesErrorStatus[inputIdx]) {
            return <Accept/>;
        } else {
            return null;
        }
    }

    return (
        <div className={classNames(style.root)}>
            <span className={style.value}>{word.value}</span>
            <span className={style.translations}>{word.translations}</span>

            <div className={style.examples}>
                <span className={style["examples-title"]}>Примеры использования:</span>
                <ul className={style["examples-list"]}>
                    {word.examples.map((example, i) =>  <li key={i} className={style["examples-item"]}>{example}</li>)}
                </ul>
            </div>

            <div className={style.inputs}>
                <span className={style.title}>Для лучшего запоминания продублируйте иностранную вариацию слова 3 раза:</span>
                <InputPanel
                    inputValue={inputValues[0]}
                    setInputValue={inputValue => inputChangeHandler(0, inputValue)}
                    placeholder={word.value}
                    externalStyles={classNames(style.input, { [style.error]: inputValuesErrorStatus[0] })}
                    inputIsActive={inputsActiveStatus[0] && slideIsActive ? true : false}
                    icon={selectIconView(0)}
                    onBlureEvent={() => inputBlureHandler(0)}
                    onFocusEvent={() => inputFocusHandler(0)}
                />
                <InputPanel
                    inputValue={inputValues[1]}
                    setInputValue={inputValue => inputChangeHandler(1, inputValue)}
                    placeholder={word.value}
                    externalStyles={classNames(style.input, { [style.error]: inputValuesErrorStatus[0] })}
                    inputIsActive={inputsActiveStatus[1] && slideIsActive ? true : false}
                    icon={selectIconView(1)}
                    onBlureEvent={() => inputBlureHandler(1)}
                    onFocusEvent={() => inputFocusHandler(1)}
                />
                <InputPanel
                    inputValue={inputValues[2]}
                    setInputValue={inputValue => inputChangeHandler(2, inputValue)}
                    placeholder={word.value}
                    externalStyles={classNames(style.input, { [style.error]: inputValuesErrorStatus[2] })}
                    inputIsActive={inputsActiveStatus[2] && slideIsActive ? true : false}
                    icon={selectIconView(2)}
                    onBlureEvent={() => inputBlureHandler(2)}
                    onFocusEvent={() => inputFocusHandler(2)}
                />
            </div>

            <span className={classNames(style.notify, errorMessageIsView && globalErrorStatus ? [style.active] : null)}>Некоторые из слов были введены неправильно</span>

            <ButtonNext externalStyles={classNames(style.button, !globalErrorStatus ? [style.active] : null)} clickHandler={openNextSlide}/>
        </div>
    )
}

export default FirstTrainingInterface;