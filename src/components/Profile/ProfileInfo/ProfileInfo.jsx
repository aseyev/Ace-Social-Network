import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from '../../common/preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userTemplatePic from "../../../assets/images/cat-avatar.png";

const ProfileInfo = ({isOwner, profile, status, updateStatus, saveUserPhoto}) => {

    if (!profile) {
        return <Preloader />
    } 

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            saveUserPhoto (e.target.files[0]);
        }
    }
    return (
        <div>
            <div className={s.profileinfo}>
                <div>
                    <h3>{profile.fullName}</h3>
                </div>
                <div>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>
                <img src={profile.photos.large || userTemplatePic } alt={profile.fullName} />
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
                <div>{profile.contacts.facebook}</div>
                <div>{profile.lookingForAJobDescription}</div>
            </div>
        </div>
    );
};
export default ProfileInfo;
