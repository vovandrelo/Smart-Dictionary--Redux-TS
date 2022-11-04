import React, { useState } from "react";
import classNames from "classnames";
import style from "./style-registr.module.sass";
import validator from "../../assets/lib/validator";

interface PropsType {
    nameValid: boolean,
    loginValid: boolean,
    emailValid: boolean,
    passValid: boolean,
    passesValid: boolean,
    userDataVerify: (dataType: string, data: string, addData?: string) => void,
    registrUser: (login: string, pass: string, name: string, email: string) => void,
}

const Registr = (props: PropsType) => {
    const {
        nameValid,
        loginValid,
        emailValid,
        passValid,
        passesValid,
        userDataVerify,
        registrUser
    } = props;


    const [name, setName] = useState<string>("");
    const [login, setLogin] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [pass, setPass] = useState<string>("");
    const [passCheck, setPassCheck] = useState<string>("");

    const onInputHandler = (event: React.ChangeEvent) => {
        if (event.target instanceof HTMLInputElement) {
            switch (event.target.name) {
                case "name":
                    const inputName = event.target.value;
                    userDataVerify("name", inputName);
                    setName(inputName);
                    break;
                case "login":
                    const inputLogin = event.target.value;
                    userDataVerify("login", inputLogin);
                    setLogin(inputLogin);
                    break;
                case "email":
                    const inputEmail = event.target.value;
                    userDataVerify("email", inputEmail);
                    setEmail(inputEmail);
                    break;
                case "pass":
                    const inputPass = event.target.value;
                    userDataVerify("pass", inputPass)
                    setPass(inputPass);
                    break;
                case "passCheck":
                    const inputCheckPass = event.target.value;
                    userDataVerify("passCheck", inputCheckPass, pass)
                    setPassCheck(inputCheckPass)
                    break;
                default:
                    break;
            }
        }
    }

    const onSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        if (nameValid && loginValid && emailValid && passValid && passesValid) {
            registrUser(login, pass, name, email);
            setName("");
            setLogin("");
            setEmail("");
            setPass("");
            setPassCheck("");
        } else {
            // Тут сделать выввод сообщения: "Не все поля заполнены"
        }
    }

    return (
        <form className={style.root} onSubmit={onSubmitHandler}>
            <fieldset>
                <legend className={style.title}>Регистрация</legend>

                <input className={
                    classNames(style.input, {
                        [style["input-correct"]]: nameValid,
                        [style["input-in-correct"]]: !nameValid && name.length > 0
                    })}
                    type="text"
                    name="name"
                    placeholder="Имя"
                    value={name}
                    onChange={onInputHandler}/>
                <input className={
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
                            [style["input-correct"]]: emailValid,
                            [style["input-in-correct"]]: !emailValid && email.length > 0
                        })}
                    type="email"
                    name="email"
                    placeholder="Почта"
                    value={email}
                    onChange={onInputHandler}/>
                <input className={
                    classNames(style.input, {
                        [style["input-correct"]]: passValid,
                        [style["input-in-correct"]]: !passValid && pass.length > 0
                    })}
                    type="password"
                    name="pass"
                    placeholder="Пароль"
                    value={pass}
                    onChange={onInputHandler}/>
                <input
                    className={
                        classNames(style.input, {
                            [style["input-correct"]]: passesValid,
                            [style["input-in-correct"]]: !passesValid && passCheck.length > 0
                        })}
                    type="password"
                    name="passCheck"
                    placeholder="Пароль ещё раз"
                    value={passCheck}
                    onChange={onInputHandler}/>

                <button className={style.button} type="submit">Зарегистрироваться</button>
            </fieldset>
        </form>
    )
}

export default Registr;