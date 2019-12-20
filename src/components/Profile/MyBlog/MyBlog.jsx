import React from "react";
import s from "./MyBlog.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength20 = maxLengthCreator(20);

const MyBlog = props => {

    let postsListing = props.posts.map(p => <Post post={p.post} likesCount={p.likes} />)

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.myblog}>
            <div className={s.inputPost}>
                <ReduxAddNewBlogPostForm onSubmit={onAddPost} />
            </div>
            <div>
                <h3>My Blog</h3>
                {postsListing}
            </div>
        </div >
    );
};

const addNewBlogPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <h3>New Post</h3>
            <Field component={Textarea} 
                name='newPostText' 
                placeholder='enter new post' 
                validate={[required, maxLength20]}
            />
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const ReduxAddNewBlogPostForm = reduxForm({ form: 'NewBlogPostBody' })(addNewBlogPostForm);

export default MyBlog;
