import React from "react";
import {addPost} from "../../../redux/profile-reducer" ;
import MyBlog from './MyBlog';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const MyBlogContainer = connect(mapStateToProps, {addPost})(MyBlog);

export default MyBlogContainer;
