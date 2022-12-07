import InputPanel from "../../input-panel/input-panel";
import style from "./training-interface-4.module.sass";
import Button from "../../button/button";

const FourthTrainingInterface = () => {

    return (
        <div className={style.root}>
            <span className={style.translations}>Осуществлять</span>

            <InputPanel externalStyles={style.input} placeholder="Введите перевод"/>
            
            <Button externalStyles={style.button} text="Дальше"/>
        </div>
    )
}

export default FourthTrainingInterface;