import React from 'react';
import s from "./Users.module.css";
import userTemplatePic from "../../assets/images/cat-avatar.png"
import { NavLink } from 'react-router-dom'
import * as axios from 'axios';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div className={s.usersBG}>
        <div className={s.pagination}>
            <ul>
                {pages.map(p => {
                    return <li className={props.currentPage === p && s.selectedPage}
                        onClick={(e) => { props.onPageChanged(p) }}>{p}</li>
                })}
            </ul>
        </div>
        <div className={s.usersList}>
            {props.users.map(u =>
                <div key={u.id} className={s.userBlock} >
                    <div className={s.userLeft} >
                        <div>
                            <NavLink to={'/profile/' + u.id} >
                                <img src={u.photos.small != null ? u.photos.small : userTemplatePic} alt={u.name} />
                            </NavLink>

                        </div>
                        <div>
                            {u.id}
                        </div>
                    </div>
                    <div>
                        <div className={s.userCenter}>
                            <div>{u.name}</div>
                        </div>
                        <div className={s.userRight}>
                            <div>{u.followed
                                ? <button onClick={() => {

                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {"API-KEY" : "eb0c046e-227c-4a33-b9d2-bd8d71c72b1d"}
                                    })
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.unfollow(u.id)
                                            }
                                        });
                                }} >unfollow</button>

                                : <button onClick={() => {

                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {"API-KEY" : "eb0c046e-227c-4a33-b9d2-bd8d71c72b1d"}

                                    })
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.follow(u.id)
                                            }
                                        });
                                }} >follow</button>
                            }
                            </div>
                        </div>
                    </div>
                </div>
            )// end of mapping
            }
        </div>
    </div>

}

export default Users;