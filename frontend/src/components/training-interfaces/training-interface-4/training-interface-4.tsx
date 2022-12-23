import InputPanel from "../../input-panel/input-panel";
import style from "./training-interface-4.module.sass";
import Button from "../../button/button";
import ButtonNext from "../../button-next/button-next";
import classNames from "classnames";
import Error from "../../icons/error/error";

interface PropsType {
    inputValue: string,
    wordValue: string,
    translations: string,
    inputIsFinish: boolean,
    globalErrorStatus: boolean,
    inputIsActive: boolean,
    inputChangeHandler: (newInputValue: string) => void,
    openNextSlide: () => void,
}

const FourthTrainingInterface = (props: PropsType) => {
    const {
        inputValue,
        wordValue,
        translations,
        inputIsFinish,
        globalErrorStatus,
        inputIsActive,
        inputChangeHandler,
        openNextSlide
    } = props;

    return (
        <div className={style.root}>
            <span className={style.translations}>{translations}</span>

            <span className={style.hint}>{"Введите перевод слова:"}</span>

            <InputPanel
                inputValue={inputValue}
                setInputValue={inputChangeHandler}
                placeholder={"Тут должен быть перевод =)"}
                externalStyles={classNames(style.input, {[style.error]: inputIsFinish && globalErrorStatus})}
                icon={inputIsFinish && globalErrorStatus ? <Error/> : null}
                inputIsActive={inputIsFinish ? false : inputIsActive}
            />

            {
               inputIsFinish
               ? <div className={style["notify-block"]}>
                    <span className={style["text"]}>{globalErrorStatus ? "Вы ошиблись. Правильный перевод: " : null}</span>
                    <span className={style["highlight"]}>{globalErrorStatus ? wordValue : "Правильно!"}</span>
                </div>
               : <div className={style.space}></div>
            }
            
            <ButtonNext
                externalStyles={classNames(style.next)}
                clickHandler={openNextSlide}
            />
        </div>
    )
}

export default FourthTrainingInterface;