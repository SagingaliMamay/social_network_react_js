import React from "react";
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <div className="Navbar_navbar__31-FB">
                <a href="/profile">Profile</a>


            </div>
            <div className="Profile_content__2A0wl">
                <a href="/dialogs">Message</a>
            </div>
            <div className="item">
                <a href="/news">News</a>
            </div>
            <div className="item">
                <a href="/music">Music</a>
            </div>
            <br />
            <div className="item">
                <a href="/settings">Settings</a>
            </div>
        </nav>
    )
};

export default Navbar;