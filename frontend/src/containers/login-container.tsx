import { useState } from "react";
import Login from "../components/login/login";
import validator from "../assets/lib/validator";

const LoginContainer = () => {
    const [loginValid, setLoginValid] = useState<boolean>(false);
    const [passValid, setPassValid] = useState<boolean>(false);

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
    
    return (
        <Login
            loginValid={loginValid}
            passValid={passValid}
            userDataVerify={userDataVerify}
        />
    )
}

export default LoginContainer;