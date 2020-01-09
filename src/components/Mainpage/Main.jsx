import React from "react";
// import MyPosts from "./MyPosts/MyPosts";
// import Post from "../Profile/MyPosts/Post/Post";
import s from "./Main.module.css";

const MainPage = (props) => {
    return (
        <div className={s.main}>
            <div className={s.story}>
                <div className={s.storyPost}>
                    <h2>React Social Network</h2>
                    <p>This SPA-project was started by me in Jun, 2019. 
                        Its purpose is to apply and demonstrate the maximum 
                        of possibilities for a combination of React JS + Redux libraries. 
                        This project is currently under development and continues to be developed along with my skills. 
                        It is also constantly optimized and refactored for new REACT features.</p>
                    <p className={s.authorDate} >Anton Aseev, Jun, 2019</p>
                </div>
                <div className={s.storyPost}>
                    <h2>My name is Anton Aseev</h2>
                    <p>I was graduated with Master's Degree in 'Information Techs in Printing Industry',
                        and started to work with the Design in Printing from 2001. 
                        Since 2011, my activity has become connected with the support 
                        of web-sites of those companies where I was working at that moment. 
                        And since 2018, I began to study in depth HTML5, CSS3 and JS (ES 6) in order 
                        to engage exclusively in website development. In 2019, I started programming 
                        this project under the direction of Dimych. Since then, the project has been 
                        significantly modified by me personally in accordance with my ideas and needs.</p>
                    <p className={s.authorDate} >Anton Aseev, Jul, 2019</p>
                </div>
                <div className={s.storyPost}>
                    <h2>Main Techs, already used there</h2>
                    <p>HTML5 with flexes and grids;</p>
                    <p>CSS3 (LESS is almost there, but not yet).</p>
                    <p>'React JS', 'Redux', and also libraries: 'React+Redux', 
                        'Axios' for get/post server requests, 
                        'Reselect', 'Redux-thunk' for middleware,
                        'Classnames' for combining styles,
                        'Redux-form' for form verifications...
                        and 'Jest' for a bit testing.
                        So, Classes, Hooks, Thunks, Tests etc are already there!</p>
                    <p>And of course, as you see, it is placed on 'Github-pages':
                        <a href={"https://github.com/aseyev/Ace-Social-Network"}> Link to GitHub repo.</a>
                    </p>
                    <p className={s.authorDate} >Anton Aseev, Aug, 2019</p>
                </div>
            </div>
        </div>
    );
};
export default MainPage;
