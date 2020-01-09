import React from "react";
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import logoOwl from '../../assets/images/logoOwl-ef.png';
import userGiraffe from '../../assets/images/giraffe-avatar.png';


const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.headerContent}>
                    <NavLink to={'/'} >
                        <img className={s.img} src={logoOwl} alt="logo" />
                    </NavLink>

                    <div>
                        <h1>React Js Ace</h1>
                        <h4>Developer's Social Network</h4>
                    </div>
                    <div className={s.loginBlock} >
                        {props.isAuth
                            ? <div className={s.userLogged}>
                                <div className={s.userLoggedInfo}>
                                    <p>{props.login}</p>
                                    <div>
                                        <button onClick={props.logout}>Log Out</button>
                                    </div>
                                </div>
                                <div className={s.userAvatar}>
                                    <NavLink to={'/profile'} >
                                        <img src={userGiraffe} alt="avatar" />
                                    </NavLink>
                                </div>
                            </div>
                            : <NavLink to={'/login'} > LOGIN
                        </NavLink>
                        }
                    </div>
                </div>

            </div>
        </header>
    );
};
export default Header;
