import React from 'react';
import blueCircle from "../../../assets/images/circlesСircle.svg";
import s from './preloader.module.css';

let PreloaderBlue = () => {
    return <div className={s.preloader_position}>
        <img src={blueCircle} alt={'loading...'}/>
    </div>
    
}

export default PreloaderBlue;