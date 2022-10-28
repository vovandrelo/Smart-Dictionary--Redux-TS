

import style from "./style-container.module.sass";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import classNames from "classnames";
import Spinner from "../spinner/spinner";

interface PropsType {
    children: React.ReactNode
}

function Container(props: PropsType) {
    const { children } = props;

    const actualLocation = useLocation();
    const [compLocation, setCompLocation] = useState(actualLocation);

    const [transformUpAnim, setTransformUpAnim] = useState(false);
    const [transformDownAnim, setTransformDownAnim] = useState(false);

    const [moveUpAnim, setMoveUpAnim] = useState(false);
    const [moveDownAnim, setMoveDownAnim] = useState(false);

    useEffect(() => {        
        if (actualLocation !== compLocation) {
            setMoveUpAnim(true);
            setTransformUpAnim(true);
        };
    }, [actualLocation, compLocation]);

    const animaContHandler = (event: React.AnimationEvent) => {
        if (transformUpAnim) {
            setTransformUpAnim(false);
            setTransformDownAnim(true);
        } else {
            setTransformUpAnim(false);
            setTransformDownAnim(false);
        }
    }

    const animInnerHandler = (event: React.AnimationEvent) => {
        if (moveUpAnim) {
            setMoveUpAnim(false);
            setMoveDownAnim(true);
        } else {
            setMoveUpAnim(false);
            setMoveDownAnim(false);
        }
    }

    return (
        <div 
            className={classNames(style.container, {[style.transformUp]: transformUpAnim, [style.transfromDown]: transformDownAnim})}
            onAnimationEnd={animaContHandler}>
            <div
                className={classNames(style.moveable, { [style.moveUp]: moveUpAnim, [style.moveDown]: moveDownAnim})}
                onAnimationEnd={animInnerHandler}
            >
                {children}
            </div>
            <Spinner externalStyles={style.spinner}/>
        </div>
    );

}

export default Container