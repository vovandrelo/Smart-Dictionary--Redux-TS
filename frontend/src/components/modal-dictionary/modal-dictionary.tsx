
import style from "./style-modal-dictionary.module.sass";
import NewWordTranslationsContainer from "../../containers/dictionary-input-containers/new-word-translations-container";
import NewWordContainer from "../../containers/dictionary-input-containers/new-word-container";
import InputPanel from "../input-panel/input-panel";
import Notify from "../notify/notify";
import Button from "../button/button";
import Plus from "../icons/plus/plus";
import NewWordExamplesContainer from "../../containers/dictionary-input-containers/new-word-examples-container";


interface PropsType {
    numTranslations: number,
    numExamples: number,
    addNewTranslation: () => void,
    addNewExampl: () => void,
    saveWord: () => void,
}

const ModalDictionary = (props: PropsType) => {
    const { numTranslations, numExamples, addNewTranslation, addNewExampl, saveWord } = props;

    const createTranslInputs = () => {
        const inputs: React.ReactNode[] = [];
        for (let i = 0; i < numTranslations; i++) {
            inputs.push(
                <NewWordTranslationsContainer
                    key={i}
                    idxTranslation={i}
                    placeholder="Выберите или введите перевод"
                    externalStyles={style["input"]}
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
                    placeholder="Введите пример использования"
                    externalStyles={style["input"]}
                />
            );
        }
        return inputs;
    }



    return (
        <div className={style["root"]}>
            <div className={style["new-word-block"]}>
                <Notify text="Введите английское слово" externalStyles={style["title"]}/>
                <NewWordContainer
                    placeholder="Введите английское слово"
                    externalStyles={style["input"]}
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