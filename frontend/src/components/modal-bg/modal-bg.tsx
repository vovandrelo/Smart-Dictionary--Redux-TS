
import style from "./style-modal-bg.module.sass";

interface PropsType {
    children: React.ReactNode
}

const ModalBg = (props: PropsType) => {
    const { children } = props;
    return (
        <div className={style.root}>
            {children}
        </div>
    )
}

export default ModalBg;