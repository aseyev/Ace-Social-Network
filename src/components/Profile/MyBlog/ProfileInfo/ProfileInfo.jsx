import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from '../../../common/preloader/Preloader';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    } 
    return (
        <div>
            <img
                className={s.imgheader}
                src="https://www.beststartcompton.org/wp-content/uploads/2019/02/39875853-header-wallpapers.jpg"
                alt="content-header"
            />

            <div className={s.profileinfo}>
                <div>{props.profile.fullName}</div>
                <img src={props.profile.photos.large} alt={props.profile.fullName} />
                <div>{props.profile.contacts.facebook}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
            </div>
        </div>
    );
};
export default ProfileInfo;
