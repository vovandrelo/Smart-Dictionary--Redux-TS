import style from "./style-container.module.sass";

interface PropsType {
    children: React.ReactNode
}

const Container = (props: PropsType) => {
    const { children } = props;
    return (
        <div className={style.root}>
            {children}
        </div>
    )
}

export default Container;