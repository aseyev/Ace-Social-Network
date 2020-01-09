import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";


const Profile = (props) => {

    return (
        <div className={s.profileStyle}>
            <ProfileInfo 
                isOwner = {props.isOwner} 
                profile = {props.profile} 
                status = {props.status} 
                updateStatus = {props.updateStatus} 
                saveUserPhoto = {props.saveUserPhoto} />
        </div>
    );
};

export default Profile;


