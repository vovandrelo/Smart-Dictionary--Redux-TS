import classNames from "classnames";
import style from "./style-double-arrows.module.sass";

interface PropsType {
    externalStyles?: typeof style,
}

const DoubleArrowsIcon = (props: PropsType) => {
    const { externalStyles } = props;
    return (
        <svg
            data-icon-type="double-arrows"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className={classNames(style.root, externalStyles)}>
            <path d="M406.6 374.6l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l41.4 41.4H109.2l41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288h293.5l-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"></path>
        </svg>
    );
}

export default DoubleArrowsIcon;