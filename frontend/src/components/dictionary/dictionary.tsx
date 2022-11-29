import React, { useState } from "react";
import classNames from "classnames";
import style from "./style-dictionary.module.sass";

import WordContainer from "../../containers/word-container";

import LearnIcon from "../icons/learn/learn";
import EditIcon from "../icons/edit/edit";
import TrashIcon from "../icons/trash/trash";
import ArrowDownIcon from "../icons/arrow-down/arrow-down";


interface PropsType {
    wordsIds: number[],
    externalStyles?: typeof style,
}

const Dictionary = (props: PropsType) => {
    const { externalStyles, wordsIds } = props;
    const [visibleExample, setVisibleExample] = useState(false);


    return (
        <div className={classNames(style["root"], externalStyles)}>
            <ul className={style["list"]}>
                {wordsIds.map(wordId => <WordContainer key={wordId} wordId={wordId}/>)}                
            </ul>
        </div>
    )
}

export default Dictionary;