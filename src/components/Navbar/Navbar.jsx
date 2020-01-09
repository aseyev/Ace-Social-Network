import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const FriendIcon = props => {
    return (
        <div className={s.friendPortrait}>
            <img className={s.friendIcon} src={props.linkto} alt=""/>
            {props.name}
        </div>
    )
}


const Navbar = props => {

    // let FriendsListing = props.friendsPage.friends.map( d => <FriendIcon name={d.name} linkto={d.linkto} /> )

    return (
        <div className={s.sidebar}>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/devblog" activeClassName={s.activeChoice} >Dev Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/findusers" activeClassName={s.activeChoice} >Find Users</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialogs" activeClassName={s.activeChoice} >Dialogs</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" activeClassName={s.activeChoice} >Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile" activeClassName={s.activeChoice} >Profile</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
