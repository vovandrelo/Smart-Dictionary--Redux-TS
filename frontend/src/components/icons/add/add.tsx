
import classNames from "classnames";
import React from "react";
import style from "./style-add.module.sass";

interface PropsType {
    externalStyles?: typeof style,
    clickHandler?: (event: React.MouseEvent) => void,
}

const AddIcon = (props: PropsType) => {
    const { externalStyles, clickHandler } = props;
    return (
        <svg
            data-icon-type="add"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className={classNames(style.root, externalStyles)}
            onClick={clickHandler}>
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32v144H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h144v144c0 17.7 14.3 32 32 32s32-14.3 32-32V288h144c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
        </svg>
    );
}

export default AddIcon