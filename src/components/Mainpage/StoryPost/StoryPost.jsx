import React from "react";
import s from "./StoryPost.module.css";
import giraffeAva from "../../../../assets/images/giraffe-avatar.png"

const StoryPost = props => {
    return (
        <div className={s.story}>
            <div className={s.storytext}>{props.post}</div>
            
            <div className={s.likesCount}>likes: {props.likesCount}</div>
        </div>
    );
};
export default StoryPost;
