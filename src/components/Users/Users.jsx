import React from 'react';
import s from "./Users.module.css";
import Paginator from '../common/paginator/paginator';
import User from './User';

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
    
    return <div className={s.usersBG}>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} 
            totalItemsCount={totalUsersCount} pageSize={pageSize} />
        <div className={s.usersList}>
            { users.map(u => <User user = {u}
                                followingInProgress={props.followingInProgress}
                                key={u.id}
                                unfollow={props.unfollow}
                                follow={props.follow}
                            />
                
            )// end of mapping
            }
        </div>
    </div>

}

export default Users;