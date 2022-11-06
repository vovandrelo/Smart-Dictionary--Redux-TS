import { useState } from "react";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { registrActions } from "../store/modules/registr";
import { selectRegistrLoadingStatus, selectRegistrLoadingMessage } from "../store/modules/registr/selectors";
import { registrThunk } from "../store/modules/registr/middlewares/registr-thunk";
import { LOADING_STATUSES } from "../store/constants/loading-statuses";

import Registr from "../components/registr/registr";
import Error from "../components/error/error";
import Spinner from "../components/spinner/spinner";
import Accept from "../components/accept/Accept";

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
            <Spinner
                externalStyles={externalStyles}
            />
        ) 
    } else if (loadingStatus === LOADING_STATUSES.failed) {
        return (
            <Error
                externalStyles={externalStyles}
                errorMessage={loadingMessage}
                btnText="Попробовать ещё раз"
                clickHandler={() => dispatch(registrActions.resetStatusRegistr())}
            />
        )  
    } else if (loadingStatus === LOADING_STATUSES.success) {
        setTimeout(() => {
            dispatch(registrActions.resetStatusRegistr())
        }, 2000);
        return (
            <Accept
                externalStyles={externalStyles}
                acceptMessage={loadingMessage}
            />
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