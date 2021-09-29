import React from "react";
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <div className = "Navbar_navbar__31-FB">
                Profile
            </div>
            <div className ="Profile_content__2A0wl">
                Message
            </div>
            <div className ="item">
                News
            </div>
            <div className ="item">
                Music
            </div>
            <br/>
            <div className ="item">
               Settings
            </div>
        </nav>
    )};

export default Navbar;