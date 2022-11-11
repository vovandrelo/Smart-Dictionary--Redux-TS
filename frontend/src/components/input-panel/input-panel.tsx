import React, { useState } from "react";
import classNames from "classnames";
import { isInputElement } from "react-router-dom/dist/dom";

import style from "./style-input-panel.module.sass";

interface PropsType {
    externalStyles?: typeof style,
    placeholder?: string,
    getInputValue?: () => string,
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
        <input
            type="text"
            placeholder={placeholder ? placeholder : ""}
            onChange={onChangeSubmit}
            value={inputValue}
            className={classNames(style.root, externalStyles)}
        />
    )
}

export default InputPanel;