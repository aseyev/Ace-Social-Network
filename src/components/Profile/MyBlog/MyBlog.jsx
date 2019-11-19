import React from "react";
import s from "./MyBlog.module.css";
import Post from "./Post/Post";

const MyBlog = props => {

    let postsListing = props.profilePage.posts.map(p => <Post post={p.post} likesCount={p.likes} />)

    let newPostElement = React.createRef()

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }


    return (
        <div className={s.myblog}>
            <div className={s.inputPost}>
                <h3>My Posts</h3>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.profilePage.newPostText} />
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div>
                {postsListing}
            </div>
        </div>
    );
};
export default MyBlog;
