import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <img
                className={s.imgheader}
                src="https://www.beststartcompton.org/wp-content/uploads/2019/02/39875853-header-wallpapers.jpg"
                alt="content-header"
            />

            <div className={s.profileinfo}>
                <div>ava + personal info</div>
            </div>
        </div>
    );
};
export default ProfileInfo;
