import React from "react";
import MyBlog from "./MyBlog/MyBlog";
import ProfileInfo from "./MyBlog/ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";


const Profile = props => {
    
    return (
        <div className={s.profileStyle}>
            <ProfileInfo/>
            <MyBlog profilePage={props.profilePage} 
            dispatch={props.dispatch} 
            />
        </div>
    );
};
// export posts;
export default Profile;


