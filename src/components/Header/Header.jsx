import React from "react";
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.img} src="https://lh3.googleusercontent.com/proxy/BCz7eiLspmtyneuf76NgzYyKCbssdracT5O5asseFvNZdBrI7NKvdIaulX7ms03lw81cssK29WIFFD1KqKfrnTakW5ohtcJWdTb_p81Tocv5L6BZmha7762cTIoM9zqA_p2ppwv6FwIzXbsNDbjaxbdOmd5NR430ZxqUiqa5ew=w530-h292-p-rw" alt="logo" />
        </header>
    );
};
export default Header;
