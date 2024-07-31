import './App.css';
import React, { useState, useEffect } from 'react';

import Login from './components/login'
import Logo from './img/Ludere_Logo.svg'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import {
  URL_EXTENSION
} from "./utility/config";


function App() {
  const [token, setToken] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //
  //   }
  //   fetchData();
  //   // DON'T DELETE THE COMMENT BELOW!!
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  // const Logout = () => {
  //   useEffect(() => {
  //     const EndShift = async () => {
  //       if (userToken !== null) {
  //         let parseToken = DriverInfoToken(userToken)
  //         let vehicleId = parseToken.vehicleId
  //         try {
  //           await axios.post(`${SERVER_URI}/end_shift`, { vehicleId: vehicleId }, { headers: { "authorization": `Token ${userToken}` } })
  //         } catch (e) {
  //           console.log("Error in ending the shift", e)
  //         }
  //       }
  //     }
  //     EndShift();
  //   }, []);
  //   let keysToRemove = ["driver_token", "permission_to_play_sound", "workShiftTime"];
  //   keysToRemove.forEach(k =>
  //     storage.removeItem(k))
  //   window.setTimeout(function () {
  //     // Move to a new location
  //     window.location.href = `${URL_EXTENSION}`;
  //   }, 1200);
  //   return <h2>Kirjauduit ulos</h2>
  // }
  const NavBar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    if (token === false) {
      return <header className="App-header">
        <h2 className='header'>Ludere Ry</h2>
        <img className='logo' src={Logo} alt="" />
      </header>
    } else {
      // return <header className="App-header">
      //   <ul className={click ? "nav-options active" : "nav-options"}>
      //     <li className="option" onClick={closeMobileMenu}>
      //       <NavLink exact activeClassName="active" to={URL_EXTENSION}>Etusivu</NavLink>
      //     </li>
      //     <li className="option" onClick={closeMobileMenu}>
      //       <NavLink activeClassName="active" to={URL_EXTENSION + "calendars"}>Kalenteri</NavLink>
      //     </li>
      //     <li className="option" onClick={closeMobileMenu}>
      //       <NavLink activeClassName="active" to={URL_EXTENSION + "drivers_and_cars"}>Autot ja Kuljettajat</NavLink>
      //     </li>
      //     <li className="option" onClick={closeMobileMenu}>
      //       <NavLink activeClassName="active" to={URL_EXTENSION + "customers"}>Asiakkaat</NavLink>
      //     </li>
      //     <li className="option" onClick={closeMobileMenu}>
      //       <NavLink activeClassName="active" to={URL_EXTENSION + "reports"}>Raportit</NavLink>
      //     </li>
      //     <li className="option" onClick={closeMobileMenu}>
      //       <NavLink activeClassName="active" to={URL_EXTENSION + "configurations"}>Asetukset</NavLink>
      //     </li>
      //     <li className="option" onClick={closeMobileMenu}>
      //       <NavLink activeClassName="active" to={URL_EXTENSION + "contacts"}>Yhteystiedot</NavLink>
      //     </li>
      //     <li className="option" onClick={closeMobileMenu}>
      //       <NavLink activeClassName="active" to={URL_EXTENSION + "logout"}>Kirjaudu ulos</NavLink>
      //     </li>
      //   </ul>
      //   <div className="mobile-menu" onClick={handleClick}>
      //     {click ? (
      //       <CloseIcon style=
      //         {{
      //           fontSize: 29,

      //         }}
      //         className="menu-icon" />
      //     ) : (
      //       <MenuIcon style={{

      //         fontSize: 29,
      //       }}
      //         className="menu-icon" />
      //     )}
      //   </div>
      // </header>
    }

  }


  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path={URL_EXTENSION} element={<Login />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

