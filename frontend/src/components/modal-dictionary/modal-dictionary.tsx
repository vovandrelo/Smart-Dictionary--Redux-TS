
import style from "./style-modal-dictionary.module.sass";
import NewWordTranslationsContainer from "../../containers/dictionary/dictionary-input-containers/new-word-translations-container";
import NewWordContainer from "../../containers/dictionary/dictionary-input-containers/new-word-container";
import InputPanel from "../input-panel/input-panel";
import Notify from "../notify/notify";
import Button from "../button/button";
import Plus from "../icons/plus/plus";
import NewWordExamplesContainer from "../../containers/dictionary/dictionary-input-containers/new-word-examples-container";
import classNames from "classnames";
import Spinner from "../icons/spinner/spinner";
import { LOADING_STATUSES } from "../../store/constants/loading-statuses";
import Accept from "../icons/accept/accept";
import Error from "../icons/error/error";

interface PropsType {
    savingStatus: LOADING_STATUSES,
    wordValueIsError: boolean,
    wordTranslationsIsError: boolean,
    setWordValueIsError: (wordValueIsError: boolean) => void,
    setWordTranslationsIsError: (wordValueIsError: boolean) => void,
    numWordTranslations: number,
    numWordExamples: number,
    addNewTranslation: () => void,
    addNewExampl: () => void,
    saveWord: () => void,
}

const ModalDictionary = (props: PropsType) => {
    const {
        savingStatus,
        wordValueIsError,
        wordTranslationsIsError,
        setWordValueIsError,
        setWordTranslationsIsError,
        numWordTranslations,
        numWordExamples,
        addNewTranslation,
        addNewExampl,
        saveWord,
    } = props;

    const createTranslInputs = () => {
        const inputs: React.ReactNode[] = [];
        for (let i = 0; i < numWordTranslations; i++) {
            inputs.push(
                <NewWordTranslationsContainer
                    key={i}
                    idxTranslation={i}
                    externalStyles={classNames(style["input"], { [style["error"]]: wordTranslationsIsError })}
                    wordTranslationsIsError={wordTranslationsIsError}
                    setWordTranslationsIsError={setWordTranslationsIsError}
                />
            );
        }
        return inputs;
    }

    const createExampslInputs = () => {
        const inputs: React.ReactNode[] = [];
        for (let i = 0; i < numWordExamples; i++) {
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

            {
                savingStatus === LOADING_STATUSES.notStarted
                ? null
                : <div className={style["blocking"]}>
                    {savingStatus === LOADING_STATUSES.inProgress ? <Spinner externalStyles={style["icon"]}/> : null}
                    {savingStatus === LOADING_STATUSES.success ? <Accept externalStyles={style["icon"]}/> : null}
                    {savingStatus === LOADING_STATUSES.failed ? <Error externalStyles={style["icon"]}/> : null}
                </div>
            }
        </div>
    )
}



export default ModalDictionary;