import classNames from "classnames"

import style from "./style-error.module.sass";

interface PropsType {
    externalStyles?: typeof style,
    clickHandler?: (event: React.MouseEvent) => void,
}

const Error = (props: PropsType) => {
    const { externalStyles, clickHandler } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 32 32"
            overflow="visible"
            viewBox="0 0 32 32"
            className={classNames(style.root, externalStyles)}
            onClick={clickHandler}>
            <g>
                <g>
                    <circle cx="16" cy="16" r="16" fill="#9F0013"></circle>
                    <path fill="#E6E6E6" d="M14.5 25h3v-3h-3v3zm0-19v13h3V6h-3z"></path>
                </g>
            </g>
        </svg>
	);
}

export default Error;