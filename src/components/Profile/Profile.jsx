import React from "react";
import ProfileInfo from "./MyBlog/ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";
import MyBlogContainer from './MyBlog/MyBlogContainer';


const Profile = () => {
    
    return (
        <div className={s.profileStyle}>
            <ProfileInfo/>
            <MyBlogContainer />
        </div>
    );
};

export default Profile;


