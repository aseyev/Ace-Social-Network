import React from "react";
import {addPost} from "../../redux/profile-reducer" ;
import DevBlog from './DevBlog';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const BlogContainer = connect(mapStateToProps, {addPost})(DevBlog);

export default BlogContainer;
