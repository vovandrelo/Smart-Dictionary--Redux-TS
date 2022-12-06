
import style from "./style.module.sass";
import Button from "../../button/button";

const TrainingSecondStage = () => {
    return (
        <div className={style.root}>
            <span className={style.value}>Implement</span>

            <div className={style.buttons}>
                <Button externalStyles={style.button} text="Машина"/>
                <Button externalStyles={style.button} text="Дом"/>
                <Button externalStyles={style.button} text="Кошелёк"/>
                <Button externalStyles={style.button} text="Компьютер"/>
            </div>
        </div>
    )
}

export default TrainingSecondStage;