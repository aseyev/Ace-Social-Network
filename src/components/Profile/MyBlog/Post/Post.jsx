import React from "react";
import s from "./Post.module.css";

const Post = props => {
    return (
        <div className={s.post}>
            <img className={s.avatar}
                src="https://i.pinimg.com/originals/80/f3/cd/80f3cd1517905873ea6a5c5ed7b53784.jpg"
                alt="post photo"
            />
            <div className={s.post}>{props.post}</div>
            <button>like</button>
            <div className={s.likesCount}>likes: {props.likesCount}</div>
        </div>
    );
};
export default Post;
