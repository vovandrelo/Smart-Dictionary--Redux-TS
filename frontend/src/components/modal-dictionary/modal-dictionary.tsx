
import style from "./style-modal-dictionary.module.sass";
import NewWordTranslationsContainer from "../../containers/dictionary/dictionary-input-containers/new-word-translations-container";
import NewWordContainer from "../../containers/dictionary/dictionary-input-containers/new-word-container";
import InputPanel from "../input-panel/input-panel";
import Notify from "../notify/notify";
import Button from "../button/button";
import Plus from "../icons/plus/plus";
import NewWordExamplesContainer from "../../containers/dictionary/dictionary-input-containers/new-word-examples-container";
import classNames from "classnames";


interface PropsType {
    wordValueIsError: boolean,
    wordTranslationsIsError: boolean,
    setWordValueIsError: (wordValueIsError: boolean) => void,
    setWordTranslationsIsError: (wordValueIsError: boolean) => void,
    numTranslations: number,
    numExamples: number,
    addNewTranslation: () => void,
    addNewExampl: () => void,
    saveWord: () => void,
}

const ModalDictionary = (props: PropsType) => {
    const { numTranslations, numExamples, addNewTranslation, addNewExampl, wordValueIsError, saveWord, setWordValueIsError } = props;

    const createTranslInputs = () => {
        const inputs: React.ReactNode[] = [];
        for (let i = 0; i < numTranslations; i++) {
            inputs.push(
                <NewWordTranslationsContainer
                    key={i}
                    idxTranslation={i}
                    externalStyles={style["input"]}
                    /* wordValueIsError={wordValueIsError} */
                />
            );
        }
        return inputs;
    }

    const createExampslInputs = () => {
        const inputs: React.ReactNode[] = [];
        for (let i = 0; i < numExamples; i++) {
            inputs.push(
                <NewWordExamplesContainer
                    key={i}
                    idxExample={i}
                    externalStyles={style["input"]}
                />
            );
        }
        return inputs;
    }



    return (
        <div className={style["root"]}>
            <div className={style["new-word-block"]}>
                <Notify text="Добавление нового слова" externalStyles={style["title"]}/>
                <NewWordContainer
                    externalStyles={classNames(style["input"], { [style["error"]]: wordValueIsError })}
                    wordValueIsError={wordValueIsError}
                    setWordValueIsError={setWordValueIsError}
                />
            </div>

            <div className={style["translate-block"]}>
                <Notify text="Переводы" externalStyles={style["title"]}/>
                {createTranslInputs()}
                <div className={style["plus-block"]} onClick={addNewTranslation}>
                    <Plus externalStyles={style["plus"]}/>
                </div>
            </div>

            <div className={style["examples-block"]}>
                <Notify text="Примеры использования" externalStyles={style["title"]}/>
                {createExampslInputs()}
                <div className={style["plus-block"]} onClick={addNewExampl}>
                    <Plus externalStyles={style["plus"]}/>
                </div>
            </div>
            
            <Button text="Сохранить" clickHandler={saveWord} externalStyles={style.button}/>
        </div>
    )
}



export default ModalDictionary;