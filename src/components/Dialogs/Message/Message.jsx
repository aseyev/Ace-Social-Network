import React from "react";
import s from "./../Dialogs.module.css";


const Message = props => {
    const authorStyle = () => props.messages.author==='me' ? s.me : s.penpal
    return <div className={authorStyle()}>{props.messages.author}: {props.messages.message}</div>;
};

export default Message;
