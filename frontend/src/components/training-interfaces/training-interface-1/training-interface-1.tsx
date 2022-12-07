import InputPanel from "../../input-panel/input-panel";
import Button from "../../button/button";
import classNames from "classnames";

import style from "./training-interface-1.module.sass";
import { DictionaryWord } from "../../../store/modules/dictionary";

interface PropsType {
    word: DictionaryWord,
    nextSlide: () => void,
    checkInputs: (numExample: number, value: string) => void,
    inputsError: boolean[],
    commonError: boolean,
    errorMessage: boolean,
}

const FirstTrainingInterface = (props: PropsType) => {
    const { nextSlide, word, checkInputs, inputsError, commonError, errorMessage } = props;
    
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
                    externalStyles={classNames(style.input, { [style.error]: inputsError[0]})}
                    placeholder={word.value}
                    getInputValue={(value) => checkInputs(0, value)}
                />
                <InputPanel
                    externalStyles={classNames(style.input, { [style.error]: inputsError[1]})}
                    placeholder={word.value}
                    getInputValue={(value) => checkInputs(1, value)}
                />
                <InputPanel
                    externalStyles={classNames(style.input, { [style.error]: inputsError[2]})}
                    placeholder={word.value}
                    getInputValue={(value) => checkInputs(2, value)}
                />
            </div>

            <span className={classNames(style.notify, errorMessage ? [style.active] : null)}>Некоторые из слов были введены неправильно</span>

            <Button externalStyles={classNames(style.button, commonError ? [style.error] : [style.accept] )} text="Дальше" clickHandler={nextSlide}/>
        </div>
    )
}

export default FirstTrainingInterface;