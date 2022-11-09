
import classNames from "classnames";
import style from "./style-dictionary.module.sass";

interface PropsType {
    externalStyles?: typeof style,
}

const Dictionary = (props: PropsType) => {
    const {externalStyles} = props;
    return (
        <div className={classNames(style["root"], externalStyles)}>
            <ul className={style["list"]}>
                <li className={style["list-item"]}>
                    <div className={style["list-item-translate"]}>
                        <div>Car</div>
                        <div>Автомобиль</div>
                    </div>
                    {/* <div className={style["list-item-example"]}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div> */}
                </li>
                <li className={style["list-item"]}>
                    <div className={style["list-item-translate"]}>
                        <div>Car</div>
                        <div>Автомобиль</div>
                    </div>
                    {/* <div className={style["list-item-example"]}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div> */}
                </li>
                <li className={style["list-item"]}>
                    <div className={style["list-item-translate"]}>
                        <div>Car</div>
                        <div>Автомобиль</div>
                    </div>
                    {/* <div className={style["list-item-example"]}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div> */}
                </li>
            </ul>
        </div>
    )
}

export default Dictionary;