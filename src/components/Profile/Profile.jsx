import React from "react";
import MyBlog from "./MyBlog/MyBlog";
import ProfileInfo from "./MyBlog/ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";


const Profile = props => {
    
    return (
        <div className={s.profileStyle}>
            <ProfileInfo/>
            <MyBlog profilePage={props.profilePage} 
            addPost={props.addPost} 
            updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
};
// export posts;
export default Profile;


