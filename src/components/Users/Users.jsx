import React from 'react';
import s from "./Users.module.css";
import userTemplatePic from "../../assets/images/cat-avatar.png";
import { NavLink } from 'react-router-dom';
import { follow, unfollow } from '../../redux/users-reducer';

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
                                ? <button disabled={props.followingInProgress.some( id => id === u.id )} 
                                onClick={() => { props.unfollow ( u.id ); }} >unfollow</button>

                                : <button disabled={props.followingInProgress.some( id => id === u.id )} 
                                onClick={() => { props.follow ( u.id ) }} >follow</button>
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