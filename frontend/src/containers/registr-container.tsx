import { useState } from "react";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { registrActions } from "../store/modules/registr";
import { selectRegistrLoadingStatus, selectRegistrLoadingMessage } from "../store/modules/registr/selectors";
import { registrThunk } from "../store/modules/registr/middlewares/registr-thunk";
import { LOADING_STATUSES } from "../store/constants/loading-statuses";

import Registr from "../components/registr/registr";
import Error from "../components/icons/error/error";
import Accept from "../components/icons/accept/accept";
import Notify from "../components/notify/notify";
import Button from "../components/button/button";
import Spinner from "../components/icons/spinner/spinner";

import validator from "../assets/lib/validator";

interface PropsType {
    externalStyles?: any
}

const RegistrContainer = (props: PropsType) => {
    const { externalStyles } = props;

    const [nameValid, setNameValid] = useState<boolean>(false);
    const [loginValid, setLoginValid] = useState<boolean>(false);
    const [emailValid, setEmailValid] = useState<boolean>(false);
    const [passValid, setPassValid] = useState<boolean>(false);
    const [passesValid, setPassesValid] = useState<boolean>(false);

    const dispatch = useAppDispatch();

    const loadingStatus = useAppSelector(selectRegistrLoadingStatus);
    const loadingMessage = useAppSelector(selectRegistrLoadingMessage);

    const userDataVerify = (dataType: string, data: string, addData: string = "") => {
        let verifyResult: boolean;
        switch (dataType) {
            case "name":
                verifyResult = data.length > 1 ? true : false;
                setNameValid(verifyResult);
                break;
            case "login":
                verifyResult = validator.loginIsCorrect(data) ? true : false;
                setLoginValid(verifyResult);
                break;
            case "email":
                verifyResult = validator.emailIsCorrect(data) ? true : false;
                setEmailValid(verifyResult);
                break;
            case "pass":
                verifyResult = validator.passIsCorrect(data) ? true : false;
                setPassValid(verifyResult);
                break;
            case "passCheck":
                verifyResult = validator.passMatching(data, addData) ? true : false;
                setPassesValid(verifyResult);
                break;
            default:
                break;
        }
    }

    const registrUser = (login: string, pass: string, name: string, email: string) => {
        if (nameValid && loginValid && emailValid && passValid && passesValid) {
            dispatch(registrThunk({login, pass, name, email}))
        }
    }

    if (loadingStatus === LOADING_STATUSES.inProgress) {
        return (
            <div className={externalStyles["spinner-block"]}>
                <Spinner externalStyles={externalStyles["spinner"]}/>
            </div>
        )
    } else if (loadingStatus === LOADING_STATUSES.failed) {
        return (
            <div className={externalStyles["error-block"]}>
                <Error externalStyles={externalStyles["error-img"]}/>
                <Notify externalStyles={externalStyles["error-message"]} text={loadingMessage}/>
                <Button externalStyles={externalStyles["error-btn"]} text={"Попробовать ещё раз"} clickHandler={() => dispatch(registrActions.resetStatusRegistr())}/>
            </div>
        )
    } else if (loadingStatus === LOADING_STATUSES.success) {
        setTimeout(() => {
            dispatch(registrActions.resetStatusRegistr())
        }, 2000);
        return (
            <div className={externalStyles["accept-block"]}>
                <Accept externalStyles={externalStyles["accept-img"]}/>
                <Notify externalStyles={externalStyles["accept-message"]} text={loadingMessage}/>
            </div>
        )
    } else {
        return (
            <Registr
                nameValid={nameValid}
                loginValid={loginValid}
                emailValid={emailValid}
                passValid={passValid}
                passesValid={passesValid}
                userDataVerify={userDataVerify}
                registrUser={registrUser}
            />
        )
    }
}

export default RegistrContainer;