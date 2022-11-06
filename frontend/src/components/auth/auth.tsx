import RegistrContainer from "../../containers/registr-container";
import LoginContainer from "../../containers/login-container";

import style from "./style-auth.module.sass";
import classNames from "classnames";

import { AuthStateType } from "../../containers/auth-container";

interface PropsType {
    authState: AuthStateType,
    changeAuthState: () => void,
}


const Auth = (props: PropsType) => {
    const { authState, changeAuthState } = props;
    return (
        <div className={style.root}>
            <div className={style.board}>

                <div className={style.helper}>
                    <h2 className={style.title}>Ещё не зарегистрированы?</h2>
                    <p className={style.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, illo illum! Qui, accusamus doloremque in architecto perspiciatis consequuntur?</p>
                    <button onClick={changeAuthState} className={style.button}>Зарегистрироваться</button>
                </div>

                <div className={style.helper}>
                    <h2 className={style.title}>Аккаунт уже существует?</h2>
                    <p className={style.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, illo illum! Qui, accusamus doloremque in architecto perspiciatis consequuntur?</p>
                    <button onClick={changeAuthState} className={style.button}>Войти</button>
                </div>

        

                <div className={classNames(style.moveable, {[style["pos-right"]]: authState === "registr", [style["pos-left"]]: authState === "login"})}>
                    <div className={classNames(style["moveable-form"], {[style["pos-right"]]: authState === "registr", [style["pos-left"]]: authState === "login"} )}>
                        <LoginContainer/>
                        <RegistrContainer externalStyles={style}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;