import React from "react";
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus, saveUserPhoto } from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom'
import { withLoginRedirect } from '../../hoc/withLoginRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

    rerenderProfile(){
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.autorizedUserId;
        }
        this.props.getUserProfile (userId);
        this.props.getStatus (userId);
    }
    componentDidMount() {
        this.rerenderProfile()
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        //rerender Status Info only if URL of main photo changed
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.rerenderProfile();
        }
    }
    render () {
        return <Profile {...this.props} 
            isOwner = {!this.props.match.params.userId}
            profile = {this.props.profile} 
            status = {this.props.status} 
            updateStatus = {this.props.updateStatus} 
            saveUserPhoto = {this.props.saveUserPhoto}
        />
    }
};

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.data.id,
    isAuth: state.auth.isAuth
});

export default compose ( 
    connect( mapStateToProps, {getUserProfile, getStatus, updateStatus, saveUserPhoto}),
    withRouter, 
    withLoginRedirect
) ( ProfileContainer );


