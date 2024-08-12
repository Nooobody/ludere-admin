import React, { useState } from 'react';
import '../App.css';

function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const onChangeName = (e) => {
        setUserName(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)

    }

    const doSubmit = async (e) => {


    }
    return (
        <div className="login_card">
            <div>
                <h2 className="login_title">Kirjaudu sisään</h2>
                <div className="login-userName">
                    <label htmlFor="userName">Käyttäjätunnus:</label><br />
                    <input className="input-field" type="text" id="username" name="username" placeholder="Käyttäjätunnus" onChange={onChangeName} required></input><br />
                </div>
                <div className="login-password">
                    <label htmlFor="password">Salasana:</label><br />
                    <input className="input-field" type="password" id="password" name="password" placeholder="Salasana" onChange={onChangePassword} required></input><br />
                </div>
                <input type="submit" id="login-button" value="Lähetä" onClick={doSubmit} />
            </div>
        </div>

    );
}

export default Login;