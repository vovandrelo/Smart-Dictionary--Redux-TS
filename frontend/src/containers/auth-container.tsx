import { useState } from "react"
import Auth from "../components/auth/auth";

export type AuthStateType = "login" | "registr";

const AuthContainer = () => {
    const [authState, setAuthState] = useState<AuthStateType>("login");

    const changeAuthState = (): void => {        
        if (authState === "login") {
            setAuthState("registr");
        } else if (authState === "registr") {
            setAuthState("login");
        }
    }

    return (
        <Auth authState={authState} changeAuthState={changeAuthState}/>
    )
}

export default AuthContainer