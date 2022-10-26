import React from "react";


const Test = () => {
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

                const response = await (await fetch("http://localhost:3001/auth/registration/", {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({login, pass, name, email})
                })).json();

                console.log(response);
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

                const response = await (await fetch("http://localhost:3001/auth/login/", {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({login, pass})
                })).json();

                console.log(response);
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