import React, { useState } from 'react';
import '../App.css';
import Logo from '../img/Ludere_Logo.svg'

function NavBar () {
        const [token, setToken] = useState(false);
        if (token === false) {
            return <header className="App-header">
                <h2 className='header'>Ludere Ry</h2>
                <img className='logo' src={Logo} alt="" />
            </header>
        } else {
        }

}

export default NavBar;