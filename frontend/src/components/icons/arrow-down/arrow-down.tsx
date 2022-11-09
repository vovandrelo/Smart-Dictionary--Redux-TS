
import classNames from "classnames";
import style from "./style-arrow-down.module.sass";

interface PropsType {
    externalStyles?: typeof style,
    clickHandler?: (event: React.MouseEvent) => void,
}

const ArrowDownIcon = (props: PropsType) => {
    const { externalStyles, clickHandler } = props;
    return (
        <svg
            data-icon-type="arrow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className={classNames(style.root, externalStyles)}
            onClick={clickHandler}>
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
        </svg>
    );
}

export default ArrowDownIcon;