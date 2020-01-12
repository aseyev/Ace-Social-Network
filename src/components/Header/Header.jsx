import React from "react";
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import logoOwl from '../../assets/images/logoOwl-ef.png';
import userGiraffe from '../../assets/images/giraffe-avatar.png';
import Button from '@material-ui/core/Button';

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
                                        <Button onClick={props.logout} variant="contained" color="primary">Log Out</Button>
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
