import classNames from "classnames"

import style from "./style-error.module.sass";

interface PropsType {
    externalStyles?: typeof style,
    errorMessage?: string,
    btnText?: string,
    clickHandler?: () => void,
}

const Error = (props: PropsType) => {
    const { externalStyles, errorMessage, btnText, clickHandler } = props;
    return (
        <div className={classNames(style.root, externalStyles?.["error-block"])}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 32 32"
                overflow="visible"
                viewBox="0 0 32 32"
                className={classNames(style.error, externalStyles?.["error-img"])}>
                <g>
                    <g>
                        <circle cx="16" cy="16" r="16" fill="#9F0013"></circle>
                        <path fill="#E6E6E6" d="M14.5 25h3v-3h-3v3zm0-19v13h3V6h-3z"></path>
                    </g>
                </g>
            </svg>
            {errorMessage ? <div className={classNames(style.message, externalStyles?.["error-message"])}>{errorMessage}</div> : null} 
            {btnText ? <button onClick={clickHandler} className={classNames(style.btn, externalStyles?.["error-btn"])}>{btnText}</button> : null} 
        </div>
	);
}

export default Error;