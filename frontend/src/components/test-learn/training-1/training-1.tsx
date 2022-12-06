import InputPanel from "../../input-panel/input-panel";
import Button from "../../button/button";

import style from "./style.module.sass";


const TrainingFirstStage = () => {
    return (
        <div className={style.root}>
            <span className={style.value}>Implement</span>
            <span className={style.translations}>Осуществлять</span>

            <div className={style.examples}>
                <span className={style["examples-title"]}>Примеры использования:</span>
                <ul className={style["examples-list"]}>
                    <li className={style["examples-item"]}>I implement the will of others.</li>
                    <li className={style["examples-item"]}>I stipulated the need to implement major reforms in the party.</li>
                    <li className={style["examples-item"]}>I've already convinced MacLaren's to implement a new green initiative.</li>
                </ul>
            </div>

            <div className={style.inputs}>
                <span className={style.title}>Для лучшего запоминания продублируйте иностранную вариацию слова 3 раза:</span>
                <InputPanel externalStyles={style.input} placeholder="Implement"/>
                <InputPanel externalStyles={style.input} placeholder="Implement"/>
                <InputPanel externalStyles={style.input} placeholder="Implement"/>
            </div>
            
            
            <Button externalStyles={style.button} text="Дальше"/>
        </div>
    )
}

export default TrainingFirstStage;