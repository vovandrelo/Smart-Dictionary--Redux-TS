import React, { useState } from "react";
import classNames from "classnames";
import { isInputElement } from "react-router-dom/dist/dom";

import style from "./style-input-panel.module.sass";

interface PropsType {
    externalStyles?: typeof style,
    placeholder?: string
}

const InputPanel = (props: PropsType) => {
    const {externalStyles, placeholder} = props;

    const [inputValue, setInputValue] = useState("");

    const onChangeSubmit = (event: React.ChangeEvent) => {
        if (event && event.target instanceof HTMLInputElement) {
            setInputValue(event.target.value)
        }
    }

    return (
        <div className={style.root}>
            <input
                type="text"
                placeholder={placeholder ? placeholder : ""}
                onChange={onChangeSubmit}
                value={inputValue}
                className={classNames(style.input, externalStyles)}/>
        </div>
    )
}

export default InputPanel;