import React from "react";
import classNames from "classnames";
import style from "./style-button.module.sass";

interface PropsType {
    text: string
    externalStyles?: typeof style,
    clickHandler?: (event: React.MouseEvent) => void,
}

const Button = (props: PropsType) => {
    const { text, externalStyles, clickHandler } = props;
    return (
        <button
            className={classNames(style.root, externalStyles)}
            onClick={clickHandler}
        >
        {text}
        </button>
    )
}

export default Button;