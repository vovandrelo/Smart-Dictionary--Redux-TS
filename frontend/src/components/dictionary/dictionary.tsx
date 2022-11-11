import React, { useState } from "react";
import classNames from "classnames";
import style from "./style-dictionary.module.sass";

import LearnIcon from "../icons/learn/learn";
import EditIcon from "../icons/edit/edit";
import TrashIcon from "../icons/trash/trash";
import ArrowDownIcon from "../icons/arrow-down/arrow-down";


interface PropsType {
    externalStyles?: typeof style,
}

const Dictionary = (props: PropsType) => {
    const {externalStyles} = props;
    const [visibleExample, setVisibleExample] = useState(false);

    const showExample = (event: React.MouseEvent) => {
        event.preventDefault();
        setVisibleExample(visibleExample => !visibleExample);
    }

    return (
        <div className={classNames(style["root"], externalStyles)}>
            <ul className={style["list"]}>
                <li className={style["list-item"]}>
                    <div className={style["translate-block"]}>
                        <div className={style["translate-word"]}>Car</div>
                        <div className={style["translate-word"]}>Автомобиль</div>
                        <div className={style["icons"]}>
                            <ArrowDownIcon externalStyles={classNames(style["arrow"], {[style["hidden"]]: !visibleExample})} clickHandler={showExample}/>
                            <LearnIcon externalStyles={style["learn"]}/>
                            <EditIcon externalStyles={style["edit"]}/>
                            <TrashIcon externalStyles={style["trash"]}/>
                            
                        </div>
                    </div>
                    <div className={classNames(style["example"], { [style["hidden"]]: !visibleExample })}>
                        <div className={style["example-title"]}>Примеры использования:</div>
                        <ul className={style["example-list"]}>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        </ul>
                    </div>
                </li>
                <li className={style["list-item"]}>
                    <div className={style["translate-block"]}>
                        <div className={style["translate-word"]}>Example</div>
                        <div className={style["translate-word"]}>Пример</div>
                        <div className={style["icons"]}>
                            <ArrowDownIcon externalStyles={classNames(style["arrow"], {[style["hidden"]]: true})} clickHandler={showExample}/>
                            <LearnIcon externalStyles={style["learn"]}/>
                            <EditIcon externalStyles={style["edit"]}/>
                            <TrashIcon externalStyles={style["trash"]}/>
                            
                        </div>
                    </div>
                    <div className={classNames(style["example"], { [style["hidden"]]: true })}>
                        <div className={style["example-title"]}>Примеры использования:</div>
                        <ul className={style["example-list"]}>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        </ul>
                    </div>
                </li>
                <li className={style["list-item"]}>
                    <div className={style["translate-block"]}>
                        <div className={style["translate-word"]}>Implementation</div>
                        <div className={style["translate-word"]}>Реализация</div>
                        <div className={style["icons"]}>
                            <ArrowDownIcon externalStyles={classNames(style["arrow"], {[style["hidden"]]: true})} clickHandler={showExample}/>
                            <LearnIcon externalStyles={style["learn"]}/>
                            <EditIcon externalStyles={style["edit"]}/>
                            <TrashIcon externalStyles={style["trash"]}/>
                            
                        </div>
                    </div>
                    <div className={classNames(style["example"], { [style["hidden"]]: true })}>
                        <div className={style["example-title"]}>Примеры использования:</div>
                        <ul className={style["example-list"]}>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        </ul>
                    </div>
                </li>
                
            </ul>
        </div>
    )
}

export default Dictionary;