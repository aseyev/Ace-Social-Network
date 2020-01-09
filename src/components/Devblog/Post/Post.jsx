import React from "react";
import s from "./Post.module.css";
import giraffeAva from "../../../assets/images/giraffe-avatar.png"

const Post = props => {
    return (
        <div className={s.post}>
            <img className={s.avatar}
                src={giraffeAva}
                alt={"post"}
            />
            <div className={s.posttext}>{props.post}</div>
            
            <div className={s.likesCount}>likes: {props.likesCount}</div>
            <button>like</button>
        </div>
    );
};
export default Post;
