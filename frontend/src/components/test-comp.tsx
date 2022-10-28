import React from "react";
import { useAppDispatch } from "../store/hooks";
import { loginThunk } from "../store/modules/auth/middlewares/login-thunk";
import { registrThunk } from "../store/modules/registr/middlewares/registr-thunk";

const Test = () => {
    const dispatch = useAppDispatch();


    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        if (event.target instanceof HTMLFormElement) {
            if (event.target[0] instanceof HTMLInputElement && 
                event.target[1] instanceof HTMLInputElement &&
                event.target[2] instanceof HTMLInputElement &&
                event.target[3] instanceof HTMLInputElement) {
                const name = event.target[0].value;
                const login = event.target[1].value;
                const email = event.target[2].value;
                const pass = event.target[3].value;

                dispatch(registrThunk({login, pass, name, email}))
            }
        }
    }

    const submitHandler2 = async (event: React.FormEvent) => {
        event.preventDefault();
        if (event.target instanceof HTMLFormElement) {
            if (event.target[0] instanceof HTMLInputElement && 
                event.target[1] instanceof HTMLInputElement) {
                const login = event.target[0].value;
                const pass = event.target[1].value;

                dispatch(loginThunk({login, pass}))
            }
        }
    }

    return (
        <div>
            <div>
                <form onSubmit={(event: React.FormEvent) => submitHandler(event)}>
                    <input type="text" name="name"/>
                    <input type="text" name="login"/>
                    <input type="email" name="email"/>
                    <input type="password" name="password"/>
                    <button type="submit">Рег</button>
                </form>
            </div>
            <div>
                <form onSubmit={(event: React.FormEvent) => submitHandler2(event)}>
                    <input type="text" name="login"/>
                    <input type="password" name="password"/>
                    <button type="submit">Лог</button>
                </form>
            </div>
        </div>
    )
}


export default Test;