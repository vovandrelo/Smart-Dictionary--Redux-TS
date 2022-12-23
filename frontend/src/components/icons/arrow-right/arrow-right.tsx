import style from "./style-arrow-right.module.sass";
import classNames from "classnames";


interface PropsType {
    externalStyles?: typeof style,
    clickHandler?: (event: React.MouseEvent) => void,
}

const ArrowRightIcon = (props: PropsType) => {
    const { externalStyles, clickHandler } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={classNames(style.root, externalStyles)}
            onClick={clickHandler}
        >
            <path d="M20.707 11.293L15.05 5.636a1 1 0 00-1.414 1.414l3.95 3.95H4a1 1 0 000 2h13.586l-3.95 3.95a1 1 0 101.414 1.414l5.657-5.657a1 1 0 000-1.414z"></path>
        </svg>
    );
}

export default ArrowRightIcon;