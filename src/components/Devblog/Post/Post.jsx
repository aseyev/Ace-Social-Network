import React from "react";
import s from "./Post.module.css";
import giraffeAva from "../../../assets/images/giraffe-avatar.png"
import Button from '@material-ui/core/Button';

const Post = props => {
    return (
        <div className={s.post}>
            <img className={s.avatar}
                src={giraffeAva}
                alt={"post"}
            />
            <div className={s.posttext}>{props.post}</div>
            
            <div className={s.likesCount}>likes: {props.likesCount}</div>
            <Button variant="contained" color="primary">like</Button>
        </div>
    );
};
export default Post;
