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
                        <NavLink to="/profile" activeClassName={s.activeChoice} >Profile and Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialogs" activeClassName={s.activeChoice} >Dialogs</NavLink>
                    </li>
                    <li>
                        <NavLink to="/findusers" activeClassName={s.activeChoice} >Find Users</NavLink>
                    </li>
                    <li>
                        <NavLink to="/news" activeClassName={s.activeChoice} >News</NavLink>
                    </li>
                    <li>
                        <NavLink to="/updates" activeClassName={s.activeChoice} >Last Updates</NavLink>
                    </li>
                </ul>
                <NavLink to="/settings" activeClassName={s.activeChoice} >Settings</NavLink>
            </nav>
            {/* <div className={s.friendsSidebar}>
                <h2>Friends</h2> 
                <div className={s.friendsList}>
                    { FriendsListing }
                </div>
            </div> */}
        </div>
    );
};

export default Navbar;
