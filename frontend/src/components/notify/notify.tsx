import classNames from "classnames"
import style from "./style-notify.module.sass";

interface PropsType {
    text: string
    externalStyles?: typeof style,
}

const Notify = (props: PropsType) => {
    const { text, externalStyles } = props;
    return (
        <div className={classNames(style.root, externalStyles)}>{text}</div>
    )
}

export default Notify;