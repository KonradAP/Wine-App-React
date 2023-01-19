import React from "react";
import "./NavBar.css"
import {Link} from "react-router-dom";

export const NavBar = ({login, logoutClickHandler, loggedIn}) => {


    return (<nav className="nav-bar">
        <div className="app-name">Wine App</div>
        <div className="nav-bar-links">
            {login.length >0 ? <div className="logged-in-navbar"><div className="logged-in-name">Hello {login} !</div>
                <Link onClick={logoutClickHandler} to="/" className="nav-button" id="button-login" >Logout</Link></div>: null}
            {loggedIn ? <Link  to="/wine-list" className="nav-button" id="button-wine-list">Wine list</Link>: null}
            {loggedIn ? <Link to="/search" className="nav-button" id="button-wine-search">Wine Search</Link>: null}
        </div>
            </nav>);}