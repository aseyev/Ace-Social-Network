import React from "react";
import ProfileInfo from "./MyBlog/ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";
import MyBlogContainer from './MyBlog/MyBlogContainer';


const Profile = (props) => {
    
    return (
        <div className={s.profileStyle}>
            <ProfileInfo profile={props.profile} />
            <MyBlogContainer />
        </div>
    );
};

export default Profile;


