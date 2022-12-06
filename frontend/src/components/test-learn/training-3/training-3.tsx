import style from "./style.module.sass";
import Button from "../../button/button";

const TrainingThirdStage = () => {
    return (
        <div className={style.root}>
            <span className={style.translations}>Осуществлять</span>
            <span className={style.value}>Implement</span>

            <div className={style.buttons}>
                <Button externalStyles={style.button} text="А"/>
                <Button externalStyles={style.button} text="Б"/>
                <Button externalStyles={style.button} text="В"/>
                <Button externalStyles={style.button} text="Г"/>
                <Button externalStyles={style.button} text="А"/>
                <Button externalStyles={style.button} text="Б"/>
                <Button externalStyles={style.button} text="В"/>
                <Button externalStyles={style.button} text="Г"/>
                <Button externalStyles={style.button} text="А"/>
                <Button externalStyles={style.button} text="Б"/>
                <Button externalStyles={style.button} text="В"/>
                <Button externalStyles={style.button} text="Г"/>
            </div>
        </div>
    )
}

export default TrainingThirdStage;