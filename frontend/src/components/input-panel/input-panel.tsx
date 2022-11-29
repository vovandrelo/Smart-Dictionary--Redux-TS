import React, { useState } from "react";
import classNames from "classnames";

import style from "./style-input-panel.module.sass";

interface PropsType {
    externalStyles?: typeof style,
    placeholder?: string,
    value?: string,
    getInputValue?: (value: string) => void,
}

const InputPanel = (props: PropsType) => {
    const {externalStyles, placeholder, getInputValue, value} = props;

    const [inputValue, setInputValue] = useState(value ? value : "");

    const onChangeHandler = (event: React.ChangeEvent) => {
        if (event && event.target instanceof HTMLInputElement) {
            setInputValue(event.target.value)
            if (getInputValue) getInputValue(event.target.value);
        }
    }

    return (
        <input
            type="text"
            placeholder={placeholder ? placeholder : ""}
            onChange={onChangeHandler}
            value={inputValue}
            className={classNames(style.root, externalStyles)}
        />
    )
}

export default InputPanel;