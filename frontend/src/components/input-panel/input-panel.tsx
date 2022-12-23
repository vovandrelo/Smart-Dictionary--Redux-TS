import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";

import style from "./style-input-panel.module.sass";

interface PropsType {
    inputValue: string,
    setInputValue: (value: string) => void,
    externalStyles?: typeof style,
    placeholder?: string,
    onBlureEvent?: () => void,
    onFocusEvent?: () => void,
    icon?: React.ReactNode,
    inputIsActive?: boolean;
}

const InputPanel = (props: PropsType) => {
    const { inputValue, setInputValue, externalStyles, placeholder, onBlureEvent, onFocusEvent, icon, inputIsActive } = props;
    const inputRef = useRef(null);
    
    const onChangeHandler = (event: React.ChangeEvent) => {
        if (event && event.target instanceof HTMLInputElement) {
            setInputValue(event.target.value);
        }
    }

    useEffect(() => {
        if (inputIsActive && inputRef.current) {
            const input = inputRef.current as HTMLInputElement;
            input.focus();
            return () => input.blur();
        }
    }, [inputIsActive])

    return (
        <div className={classNames(style.root, externalStyles)}>
            <input
                ref={inputRef}
                type="text"
                placeholder={placeholder ? placeholder : ""}
                onChange={onChangeHandler}
                onBlur={onBlureEvent}
                onFocus={onFocusEvent}
                value={inputValue}
                className={classNames(style.input)}
            />
            {icon ? icon : null}
        </div>
        
    )
}

export default InputPanel;