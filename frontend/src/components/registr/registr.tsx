import React, { ChangeEvent, useState } from "react";
import style from "./style-registr.module.sass";


const Registr = () => {
    const [name, setName] = useState<string>("");
    const [login, setLogin] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [pass, setPass] = useState<string>("");
    const [passCheck, setPassCheck] = useState<string>("");

    const onInputHandler = (event: React.ChangeEvent) => {
        if (event.target instanceof HTMLInputElement) {
            switch (event.target.name) {
                case "name":
                    setName(event.target.value)
                    break;
                case "login":
                    setLogin(event.target.value)
                    break;
                case "email":
                    setEmail(event.target.value)
                    break;
                case "pass":
                    setPass(event.target.value)
                    break;
                case "passCheck":
                    setPassCheck(event.target.value)
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
                <legend className={style.title}>Регистрация</legend>

                <input className={style.input} type="text" name="name" placeholder="Имя" value={name} onChange={onInputHandler} onBlur={onBlurHandler}/>
                <input className={style.input} type="text" name="login" placeholder="Логин" value={login} onChange={onInputHandler} onBlur={onBlurHandler}/>
                <input className={style.input} type="email" name="email" placeholder="Почта" value={email} onChange={onInputHandler} onBlur={onBlurHandler}/>
                <input className={style.input} type="password" name="pass" placeholder="Пароль" value={pass} onChange={onInputHandler} onBlur={onBlurHandler}/>
                <input className={style.input} type="password" name="passCheck" placeholder="Пароль ещё раз" value={passCheck} onChange={onInputHandler} onBlur={onBlurHandler}/>

                <button className={style.button} type="submit">Зарегистрироваться</button>
            </fieldset>
        </form>
    )
}

export default Registr;