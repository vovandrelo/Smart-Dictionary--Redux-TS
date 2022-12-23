import style from "./training-interface-3.module.sass";
import Button from "../../button/button";
import { useState } from "react";
import ButtonNext from "../../button-next/button-next";
import classNames from "classnames";
import InputPanel from "../../input-panel/input-panel";
import Error from "../../icons/error/error";
import Accept from "../../icons/accept/accept";

interface PropsType {
    inputValue: string,
    wordValue: string,
    translations: string,
    unselectedChars: string[],
    inputIsFinish: boolean,
    globalErrorStatus: boolean,
    inputIsActive: boolean,
    inputChangeHandler: (newInputValue: string) => void,
    charClickHandler: (idxSelectChar: number) => void,
    openNextSlide: () => void,
}


const ThirdTrainingInterface = (props: PropsType) => {
    const {
        inputValue,
        wordValue,
        translations,
        unselectedChars,
        inputIsFinish,
        globalErrorStatus,
        inputIsActive,
        inputChangeHandler,
        charClickHandler,
        openNextSlide,
    } = props;    

    return (
        <div className={style.root}>
            <span className={style.translations}>{translations}</span>

            <span className={style.hint}>{"Введите или составьте перевод слова из предложенных букв:"}</span>
            
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
               : <div className={style.buttons}>
                    {
                        unselectedChars.map((word, i) => 
                            <Button
                                externalStyles={style.button}
                                key={i}
                                text={word}
                                clickHandler={() => charClickHandler(i)}
                            />
                        )
                    }
                </div>
            }

            <ButtonNext externalStyles={classNames(style.next, {[style.active]: inputIsFinish})} clickHandler={openNextSlide}/>
        </div>
    )
}

export default ThirdTrainingInterface;