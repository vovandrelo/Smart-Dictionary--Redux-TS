import { useState } from "react";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { loginActions } from "../store/modules/login";
import { selectLoginLoadingMessage, selectLoginLoadingStatus } from "../store/modules/login/selectos";
import { loginThunk } from "../store/modules/login/middlewares/login-thunk";
import { LOADING_STATUSES } from "../store/constants/loading-statuses";
import { useNavigate } from "react-router-dom";

import Login from "../components/login/login";
import Error from "../components/icons/error/error";
import Accept from "../components/icons/accept/accept";
import Notify from "../components/notify/notify";
import Button from "../components/button/button";
import Spinner from "../components/icons/spinner/spinner";


import validator from "../assets/lib/validator";

interface PropsType {
    externalStyles?: any
}

const LoginContainer = (props: PropsType) => {
    const { externalStyles } = props;
    
    const [loginValid, setLoginValid] = useState<boolean>(false);
    const [passValid, setPassValid] = useState<boolean>(false);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const loadingStatus = useAppSelector(selectLoginLoadingStatus);
    const loadingMessage = useAppSelector(selectLoginLoadingMessage);

    const userDataVerify = (dataType: string, data: string) => {
        let verifyResult: boolean;
        switch (dataType) {
            case "login":
                verifyResult = validator.loginIsCorrect(data) ? true : false;
                setLoginValid(verifyResult);
                break;
            case "pass":
                verifyResult = validator.passIsCorrect(data) ? true : false;
                setPassValid(verifyResult);
                break;
            default:
                break;
        }
    }

    const loginUser = (login: string, pass: string) => {
        if (loginValid && passValid) {
            dispatch(loginThunk({login, pass}))
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
                <Button externalStyles={externalStyles["error-btn"]} text={"Попробовать ещё раз"} clickHandler={() => dispatch(loginActions.resetStatusLogin())}/>
            </div>
        )  
    } else if (loadingStatus === LOADING_STATUSES.success) {
        setTimeout(() => {
            navigate("/dictionary");
        }, 1000);
        return (
            <div className={externalStyles["accept-block"]}>
                <Accept externalStyles={externalStyles["accept-img"]}/>
                <Notify externalStyles={externalStyles["accept-message"]} text={loadingMessage}/>
            </div>
        )
    }

    return (
        <Login
            loginValid={loginValid}
            passValid={passValid}
            userDataVerify={userDataVerify}
            loginUser={loginUser}
        />
    )
}

export default LoginContainer;