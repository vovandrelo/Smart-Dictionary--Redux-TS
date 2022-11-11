import React from "react";
import InputPanel from "../input-panel/input-panel";
import Plus from "../icons/plus/plus";

import style from "./style-search-dictionary.module.sass";

interface PropsType {
    addNewWord?: (event: React.MouseEvent) => void,
}

const SearchDictionary = (props: PropsType) => {
    const { addNewWord } = props;
    return (
        <div className={style.root}>
            <InputPanel
                placeholder="Поиск слов..."
                externalStyles={style.search}/>
            <Plus
                externalStyles={style.icon}
                clickHandler={addNewWord}/>
        </div>
    )
}

export default SearchDictionary;