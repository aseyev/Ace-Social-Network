import React from 'react';
import s from "./Users.module.css";
import userTemplatePic from "../../assets/images/cat-avatar.png";
import { NavLink } from 'react-router-dom';

let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div key={user.id} className={s.userBlock} >
            <div className={s.usercard_name}>
                <h3>{user.name}</h3>
            </div>
            <div className={s.usercard_info} >
                <NavLink to={'/profile/' + user.id} >
                    <img src={user.photos.small != null ? user.photos.small : userTemplatePic} alt={user.name} />
                </NavLink>
                <div className={s.usercard_text}>
                    <div>
                        {user.id}
                    </div>
                    <div>{user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => { unfollow(user.id); }} >unfollow</button>

                        : <button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {follow(user.id) }} >follow</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
        

}

export default User;