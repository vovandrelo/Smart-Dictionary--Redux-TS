
import style from "./training-interface-2.module.sass";
import Button from "../../button/button";
import classNames from "classnames";
import ButtonNext from "../../../components/button-next/button-next";

interface PropsType {
    mainValue: string,
    answerVariants: string[],
    correctAnswerVariants: string,
    answerVariantIsSelected: boolean,
    selectedAnswerVariants: string | null,
    selectHandler: (selectVariant: string) => void,
    openNextSlide: () => void,
}

const SecondTrainingInterface= (props: PropsType) => {
    const { mainValue, answerVariants, correctAnswerVariants, answerVariantIsSelected, selectedAnswerVariants, selectHandler, openNextSlide } = props;

    return (
        <div className={style.root}>
            <span className={style.value}>{mainValue}</span>

            <span className={style.title}>Выберите перевод:</span>

            <div className={style.buttons}>
                {answerVariants.map((answerVariant, i) => 
                    <Button
                        externalStyles={
                            classNames(style.button, { 
                                [style.accept]: answerVariantIsSelected && answerVariant === correctAnswerVariants,
                                [style.error]: answerVariantIsSelected && answerVariant === selectedAnswerVariants && answerVariant !== correctAnswerVariants,
                            })
                        }
                        key={i}
                        text={answerVariant}
                        clickHandler={() => selectHandler(answerVariant)}
                    />
                )}
                <div className={classNames(answerVariantIsSelected ? style.blocking : null )}></div>
            </div>
            <ButtonNext
                externalStyles={classNames(style.next, { [style.view]: answerVariantIsSelected })}
                clickHandler={openNextSlide}
            />
        </div>
    )
}

export default SecondTrainingInterface;