import React from 'react';
import s from "./Users.module.css";
import userTemplatePic from "../../assets/images/cat-avatar.png";
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

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
                        ? <Button  variant="contained" color="primary"
                            disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => { unfollow(user.id); }} >unfollow</Button>

                        : <Button  variant="contained" color="primary"
                            disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {follow(user.id) }} >follow</Button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
        

}

export default User;