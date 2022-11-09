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
                    <div className={style["list-item-translate"]}>
                        <div >Car</div>
                        <div>Автомобиль</div>
                        <div className={style["icons"]}>
                            <ArrowDownIcon externalStyles={classNames(style["arrow"], {[style["hidden"]]: visibleExample})} clickHandler={showExample}/>
                            <LearnIcon externalStyles={style["learn"]}/>
                            <EditIcon externalStyles={style["edit"]}/>
                            <TrashIcon externalStyles={style["trash"]}/>
                            
                        </div>
                    </div>
                    <div className={classNames(style["list-item-example"], { [style["hidden"]]: visibleExample })}>
                        <div className={style["list-item-example-title"]}>Примеры использования:</div>
                        <ul className={style["list-item-example-list"]}>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        </ul>
                    </div>
                </li>
                <li className={style["list-item"]}>
                    <div className={style["list-item-translate"]}>
                        <div >Car</div>
                        <div>Автомобиль</div>
                        <div className={style["icons"]}>
                            <ArrowDownIcon externalStyles={classNames(style["arrow"], {[style["hidden"]]: visibleExample})} clickHandler={showExample}/>
                            <LearnIcon externalStyles={style["learn"]}/>
                            <EditIcon externalStyles={style["edit"]}/>
                            <TrashIcon externalStyles={style["trash"]}/>
                            
                        </div>
                    </div>
                    <div className={classNames(style["list-item-example"], { [style["hidden"]]: visibleExample })}>
                        <div className={style["list-item-example-title"]}>Примеры использования:</div>
                        <ul className={style["list-item-example-list"]}>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        </ul>
                    </div>
                </li>
                <li className={style["list-item"]}>
                    <div className={style["list-item-translate"]}>
                        <div >Car</div>
                        <div>Автомобиль</div>
                        <div className={style["icons"]}>
                            <ArrowDownIcon externalStyles={classNames(style["arrow"], {[style["hidden"]]: visibleExample})} clickHandler={showExample}/>
                            <LearnIcon externalStyles={style["learn"]}/>
                            <EditIcon externalStyles={style["edit"]}/>
                            <TrashIcon externalStyles={style["trash"]}/>
                            
                        </div>
                    </div>
                    <div className={classNames(style["list-item-example"], { [style["hidden"]]: visibleExample })}>
                        <div className={style["list-item-example-title"]}>Примеры использования:</div>
                        <ul className={style["list-item-example-list"]}>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Dictionary;