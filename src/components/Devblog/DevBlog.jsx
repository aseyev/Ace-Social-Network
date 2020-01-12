import React from "react";
import s from "./Devblog.module.css";
import sf from "../common/FormsControls/FormsControls.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { required, maxLengthCreator } from '../../utils/validators/validators';
import { Textarea } from '../common/FormsControls/FormsControls';

const maxLength20 = maxLengthCreator(20);

const DevBlog = props => {

    let postsListing = props.posts.map(p => <Post post={p.post} likesCount={p.likes} />)

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.myblog}>
            <h2>My Blog</h2>
            <p>Posts are saved in the Global Store.</p>
            <p>Some verifications of a text field are provided before adding.</p>
            <p>Like counter is under construction.</p>
            <div className={s.inputPost}>
                <ReduxAddNewBlogPostForm onSubmit={onAddPost} />
            </div>
            <div>
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
                <button className={sf.my_button}>Add post</button>
            </div>
        </form>
    )
}

const ReduxAddNewBlogPostForm = reduxForm({ form: 'NewBlogPostBody' })(addNewBlogPostForm);

export default DevBlog;
