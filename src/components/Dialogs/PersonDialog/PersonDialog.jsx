import React from "react";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const PersonDialog = props => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.personDialog + " " + s.activeDialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

export default PersonDialog;
