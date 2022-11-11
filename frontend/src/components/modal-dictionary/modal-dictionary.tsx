
import style from "./style-modal-dictionary.module.sass";
import InputPanel from "../input-panel/input-panel";
import Notify from "../notify/notify";
import Button from "../button/button";
import DoubleArrowsIcon from "../icons/double-arrows/double-arrows";
import Plus from "../icons/plus/plus";

interface PropsType {
    
}

const ModalDictionary = () => {
    return (
        <div className={style.root}>
            <h3 className={style.title}>Добавление нового слова</h3>
            <div className={style["translate-block"]}>
                <InputPanel placeholder="Введите слово" externalStyles={style["translate-input"]}/>
                <DoubleArrowsIcon externalStyles={style["arrows"]}/>
                <InputPanel placeholder="Выберите или введите перевод" externalStyles={style["translate-input"]}/>
            </div>
            <Notify text="Введите примеры использования" externalStyles={style.notify}/>
            <InputPanel placeholder="Выберите или введите перевод" externalStyles={style.example}/>
            <div className={style["plus-block"]}>
                <Plus externalStyles={style["plus"]}/>
            </div>
            <Button text="Сохранить" externalStyles={style.button}/>
        </div>
    )
}

export default ModalDictionary;