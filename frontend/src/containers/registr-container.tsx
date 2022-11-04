import { useAppDispatch } from "../store/hooks";
import { useState } from "react";
import validator from "../assets/lib/validator";
import Registr from "../components/registr/registr";
import { registrThunk } from "../store/modules/registr/middlewares/registr-thunk";

const RegistrContainer = () => {
    const [nameValid, setNameValid] = useState<boolean>(false);
    const [loginValid, setLoginValid] = useState<boolean>(false);
    const [emailValid, setEmailValid] = useState<boolean>(false);
    const [passValid, setPassValid] = useState<boolean>(false);
    const [passesValid, setPassesValid] = useState<boolean>(false);

    const dispatch = useAppDispatch();

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

    return (
        <Registr
            nameValid={nameValid}
            loginValid={loginValid}
            emailValid={emailValid}
            passValid={passValid}
            passesValid={passesValid}
            userDataVerify={userDataVerify}
            registrUser={registrUser}/>
    )
}

export default RegistrContainer;