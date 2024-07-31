import React, { useState } from 'react';
import '../App.css';

function Login() {

    const [userData, setUserData] = useState({
        username: '',
        password: ''
    })

    //Look at this closer
    const onChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const doSubmit = async (e) => {
        // e.preventDefault()
        // let token = null
        // try {
        //     token = await axios.post(`${SERVER_URI}/admin_login/`, userData)
        //     window.localStorage.setItem("admin_token", (token.data.userToken))
        //     console.log("Token luotu")
        //     window.location.href = `${URL_EXTENSION}`
        // } catch (e) {
        //     console.log("Error in login", e)
        // }
    }
    return (
        <div className="login_card">
            <div>
                <h2 className="login_title">Kirjaudu sisään</h2>
                <form className="login_form" onSubmit={e => doSubmit(e)}>
                    <div className = "login-userName">
                    <label htmlFor="phoneNumber">Käyttäjätunnus:</label><br/>
                        <input className ="input-field" type="text" id="username" name="username" placeholder="Käyttäjätunnus" onChange={onChange} required></input><br />
                    </div>
                    <div className = "login-password">
                        <label htmlFor="orderId">Salasana:</label><br />
                        <input className ="input-field" type="password" id="password" name="password" placeholder="Salasana" onChange={onChange} required></input><br />
                    </div>
                    <input type="submit" id="login-button" value="Lähetä" />
                </form>
            </div>
        </div>

    );
}

export default Login;