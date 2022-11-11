import React from "react";
import InputPanel from "../input-panel/input-panel";
import Plus from "../icons/plus/plus";
import style from "./style-search-dictionary.module.sass";
import { NavigateFunction } from "react-router-dom";

interface PropsType {
    navigate: NavigateFunction,
}

const SearchDictionary = (props: PropsType) => {
    const { navigate } = props;
    return (
        <div className={style.root}>
            <InputPanel
                placeholder="Поиск слов..."
                externalStyles={style.search}/>
            <Plus
                externalStyles={style.icon}
                clickHandler={() => navigate("create")}/>
        </div>
    )
}

export default SearchDictionary;