import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from '../../../common/preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    } 
    return (
        <div>
                <div className={s.profileinfo}>
                <div>{props.profile.fullName}</div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                <img src={props.profile.photos.large} alt={props.profile.fullName} />
                <div>{props.profile.contacts.facebook}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
            </div>
        </div>
    );
};
export default ProfileInfo;
