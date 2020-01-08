import React from 'react';
import s from "./Users.module.css";
import userTemplatePic from "../../assets/images/cat-avatar.png";
import { NavLink } from 'react-router-dom';

let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div key={user.id} className={s.userBlock} >
            <div className={s.userLeft} >
                <div>
                    <NavLink to={'/profile/' + user.id} >
                        <img src={user.photos.small != null ? user.photos.small : userTemplatePic} alt={user.name} />
                    </NavLink>

                </div>
                <div>
                    {user.id}
                </div>
            </div>
            <div>
                <div className={s.userCenter}>
                    <div>{user.name}</div>
                </div>
                <div className={s.userRight}>
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