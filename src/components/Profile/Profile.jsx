import React from "react";
import ProfileInfo from "./MyBlog/ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";
import MyBlogContainer from './MyBlog/MyBlogContainer';
// import { updateStatus } from '../../redux/profile-reducer';


const Profile = (props) => {

    return (
        <div className={s.profileStyle}>
            <ProfileInfo profile={props.profile} 
                status = {props.status} 
                updateStatus ={props.updateStatus} />
            <MyBlogContainer />
        </div>
    );
};

export default Profile;


