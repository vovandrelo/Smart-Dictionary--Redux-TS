import classNames from "classnames";

import LearnIcon from "../icons/learn/learn";
import EditIcon from "../icons/edit/edit";
import TrashIcon from "../icons/trash/trash";
import ArrowDownIcon from "../icons/arrow-down/arrow-down";

import { DictionaryWord } from "../../store/modules/dictionary";

import style from "./word-style.module.sass";
import { LOADING_STATUSES } from "../../store/constants/loading-statuses";
import Spinner from "../icons/spinner/spinner";
import Error from "../icons/error/error";


interface PropsType {
    wordData: DictionaryWord,
    examplesIsVisible: boolean,
    showExample: (event: React.MouseEvent) => void,
    editWord: () => void,
    deleteWord: () => void,
    deletingStatus?: LOADING_STATUSES,
}


const Word = (props: PropsType) => {
    const { wordData, examplesIsVisible, showExample, editWord, deleteWord, deletingStatus } = props;


    return (
        <li className={style["root"]}>
            <div className={style["translate-block"]}>
                <div className={style["translate-word"]}>{wordData.value}</div>
                <div className={style["translate-word"]}>{wordData.translations.join(", ")}</div>
                <div className={style["icons"]}>
                    <ArrowDownIcon
                        externalStyles={classNames(style["arrow"], {[style["hidden"]]: !examplesIsVisible})}
                        clickHandler={showExample}
                    />
                    <LearnIcon externalStyles={style["learn"]}/>
                    <EditIcon
                        externalStyles={style["edit"]}
                        clickHandler={editWord}
                    />
                    {!deletingStatus ? <TrashIcon externalStyles={style["trash"]} clickHandler={deleteWord}/> : null}
                    {deletingStatus === LOADING_STATUSES.inProgress ? <Spinner externalStyles={style["spinner"]}/> : null}
                    {deletingStatus === LOADING_STATUSES.failed ? <Error externalStyles={style["error"]}/> : null}
                    
                    
                </div>
            </div>
            <div className={classNames(style["example"], { [style["hidden"]]: !examplesIsVisible })}>
                <div className={style["example-title"]}>Примеры использования:</div>
                <ul className={style["example-list"]}>
                    {wordData.examples.map((example, i) => <li key={i}>{example}</li>)}
                </ul>
            </div>
        </li>
    )
}

export default Word;