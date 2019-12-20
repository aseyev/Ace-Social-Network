import React from "react";
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import logoOwl from "../../assets/images/logoOwl.webp"


const Header = (props) => {
    return (
        <header className={s.header}>
            <img className={s.img} src={logoOwl} alt="logo" />
            <div className={s.loginBlock} >
                {props.isAuth 
                ? <div> 
                    {props.login} 
                    <button onClick={props.logout}>Log Out</button>
                </div>
                : <NavLink to={ '/login'} > LOGIN
                </NavLink>
                }
                
            </div>
        </header>
    );
};
export default Header;
