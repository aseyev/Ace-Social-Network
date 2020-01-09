import React from 'react';
import s from "./Users.module.css";
import Paginator from '../common/paginator/paginator';
import User from './User';

let Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {

    return (
        <div className={s.users_page}>
            <div className={s.users_paginator}>
                <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                    totalItemsCount={totalUsersCount} pageSize={pageSize} />
            </div>

            <div className={s.users_list}>
                {users.map(u => <User user={u}
                    followingInProgress={props.followingInProgress}
                    key={u.id}
                    unfollow={props.unfollow}
                    follow={props.follow}
                />

                )// end of mapping
                }
            </div>
        </div>
    )

}
export default Users;