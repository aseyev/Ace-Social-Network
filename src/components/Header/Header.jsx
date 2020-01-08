import React from "react";
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import logoOwl from '../../assets/images/logoOwl-ef.png';


const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.headerContent}>
                    <img className={s.img} src={logoOwl} alt="logo" />
                    <div>
                        <h1>React Js Ace</h1>
                        <h4>Developer's Social Network</h4>
                    </div>
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
                </div>
                
            </div>
        </header>
    );
};
export default Header;
