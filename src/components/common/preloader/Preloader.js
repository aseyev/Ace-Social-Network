import React from 'react';
import preloader1 from "../../../assets/images/preloader2.svg";
import s from './preloader.module.css';

let Preloader = () => {
    return <div className={s.preloader_position}>
        <img src={preloader1} alt={'loading...'}/>
    </div>
    
}

export default Preloader;