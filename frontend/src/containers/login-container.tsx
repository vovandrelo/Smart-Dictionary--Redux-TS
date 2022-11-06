import { useState } from "react";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { loginActions } from "../store/modules/login";
import { selectLoginLoadingMessage, selectLoginLoadingStatus } from "../store/modules/login/selectos";
import { loginThunk } from "../store/modules/login/middlewares/login-thunk";
import { LOADING_STATUSES } from "../store/constants/loading-statuses";
import { useNavigate } from "react-router-dom";

import Login from "../components/login/login";
import Spinner from "../components/spinner/spinner";
import Error from "../components/error/error";
import Accept from "../components/accept/Accept";

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
                clickHandler={() => dispatch(loginActions.resetStatusLogin())}
            />
        )  
    } else if (loadingStatus === LOADING_STATUSES.success) {
        setTimeout(() => {
            navigate("/");
        }, 1000);
        return (
            <Accept
                externalStyles={externalStyles}
                acceptMessage={loadingMessage}
            />
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