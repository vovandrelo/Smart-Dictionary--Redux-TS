import { useState } from "react";
import style from "./style-login.module.sass";
import classNames from "classnames";
interface PropsType {
    loginValid: boolean,
    passValid: boolean,
    userDataVerify: (dataType: string, data: string) => void,
}

const Login = (props: PropsType) => {
    const { loginValid, passValid, userDataVerify} = props;
    const [login, setLogin] = useState<string>("");
    const [pass, setPass] = useState<string>("");

    const onInputHandler = (event: React.ChangeEvent) => {
        if (event.target instanceof HTMLInputElement) {
            switch (event.target.name) {
                case "login":
                    const inputLogin = event.target.value;
                    userDataVerify("login", inputLogin);
                    setLogin(inputLogin);
                    break;
                case "pass":
                    const inputPass = event.target.value;
                    userDataVerify("pass", inputPass)
                    setPass(inputPass);
                    break;
                default:
                    break;
            }
        }
    }

    return (
        <form className={style.root}>
            <fieldset>
                <legend className={style.title}>Авторизация</legend>

                <input
                    className={
                        classNames(style.input, {
                            [style["input-correct"]]: loginValid,
                            [style["input-in-correct"]]: !loginValid && login.length > 0
                        })}
                    type="text"
                    name="login"
                    placeholder="Логин"
                    value={login}
                    onChange={onInputHandler}/>
                
                <input
                    className={
                        classNames(style.input, {
                            [style["input-correct"]]: passValid,
                            [style["input-in-correct"]]: !passValid && pass.length > 0
                        })}
                    type="password"
                    name="pass"
                    placeholder="Пароль"
                    value={pass}
                    onChange={onInputHandler}/>
                
                <button className={style.button} type="submit">Войти</button>
            </fieldset>
        </form>
    )
}

export default Login;