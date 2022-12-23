import style from "./button-next.module.sass";
import classNames from "classnames";
import ArrowRightIcon from "../icons/arrow-right/arrow-right";

interface PropsType {
    externalStyles?: typeof style,
    clickHandler?: (event: React.MouseEvent) => void,
}

const ButtonNext = (props: PropsType) => {
    const { externalStyles, clickHandler } = props;
    return (
        <div
            className={classNames(style.root, externalStyles)}
            onClick={clickHandler}
        >
            <ArrowRightIcon externalStyles={style.icon}/>
        </div>
    )
}

export default ButtonNext;