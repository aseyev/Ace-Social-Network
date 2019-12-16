import React from "react";
import {updateNewPostTextActionCreator, addPostActionCreator} from "../../../redux/profile-reducer" ;
import MyBlog from './MyBlog';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps =(dispatch) => {
    return {
        updateNewPostText: (text) => {dispatch(updateNewPostTextActionCreator(text))},
        addPost: () => {dispatch(addPostActionCreator())}
    }
}

const MyBlogContainer = connect(mapStateToProps, mapDispatchToProps)(MyBlog);

export default MyBlogContainer;
