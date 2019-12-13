import React from "react";
import { connect } from 'react-redux';
import {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers
} from '../../redux/users-reducer';
import Users from './Users';
import s from "./Users.module.css";
import Preloader from '../common/preloader/Preloader';


class UsersComponent extends React.Component {

    componentDidMount() {
        this.props.getUsers ( this.props.currentPage, this.props.pageSize );
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers ( pageNumber, this.props.pageSize );
    }

    render() {

        return <div className={s.usersBG}>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                onPageChanged={this.onPageChanged}
                // toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress} 
                />
        </div>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, 
    {follow, unfollow, setCurrentPage, 
        toggleFollowingProgress, getUsers})(UsersComponent);
