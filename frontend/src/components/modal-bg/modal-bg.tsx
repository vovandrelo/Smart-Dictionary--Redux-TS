import classNames from "classnames";
import React, { useEffect, useState } from "react";
import style from "./style-modal-bg.module.sass";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { dictionaryActions } from "../../store/modules/dictionary";



interface PropsType {
    children: React.ReactNode
}

const ModalBg = (props: PropsType) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { children } = props;

    useEffect(() => {
        setIsOpen(true);
    }, []);

    const closeModal = (event: React.MouseEvent) => {
        if (event.target === event.currentTarget) {
            setIsOpen(false);
            dispatch(dictionaryActions.closeModal());
            setTimeout(() => {
                navigate("/dictionary")
            }, 500)
        }
    }

    return (
        <div
            className={classNames(style.root, { [style["is-open"]]: isOpen })}
            onClick={closeModal}>
            {children}
        </div>
    )
}

export default ModalBg;