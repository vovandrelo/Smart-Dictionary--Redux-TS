import { useState } from "react";
import style from "./style-login.module.sass";

const Login = () => {
    const [login, setLogin] = useState<string>("");
    const [pass, setPass] = useState<string>("");

    const onInputHandler = (event: React.ChangeEvent) => {
        if (event.target instanceof HTMLInputElement) {
            switch (event.target.name) {
                case "login":
                    setLogin(event.target.value)
                    break;
                case "pass":
                    setPass(event.target.value)
                    break;
                default:
                    break;
            }
        }
    }

    const onBlurHandler = (event: React.FocusEvent) => {
        
    }


    return (
        <form className={style.root}>
            <fieldset>
                <legend className={style.title}>Авторизация</legend>
                <input className={style.input} type="text" name="login" placeholder="Логин" value={login} onChange={onInputHandler} onBlur={onBlurHandler}/>
                <input className={style.input} type="password" name="pass" placeholder="Пароль" value={pass} onChange={onInputHandler} onBlur={onBlurHandler}/>
                <button className={style.button} type="submit">Войти</button>
            </fieldset>
        </form>
    )
}

export default Login;