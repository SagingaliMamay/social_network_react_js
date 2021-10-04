import React from "react";
import { NavLink } from "react-router-dom";
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <div className={style.item}>
                <NavLink to="/profile" activeClassName={style.activeLink}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/dialogs" activeClassName={style.activeLink}>Message</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/news">News</NavLink>
            </div>
            <div className={style.activeLink}>
                <NavLink to="/music">Music</NavLink>
            </div>
            <br />
            <div className="item">
                <NavLink to="/settings">Settings</NavLink>
            </div>
        </nav>
    )
};

export default Navbar;