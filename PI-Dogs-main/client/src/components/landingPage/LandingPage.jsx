import React from 'react';
import {Link} from 'react-router-dom';
import style from './LandingPage.module.css'
import BGDoggie from './img/BGDoggie.mp4'



export default function LandingPage() {
    return (
        <div className={style.header.content}>
            <div>
                <video className={style.video} autoPlay loop muted>  
                    <source src={BGDoggie} type='video/mp4'/>
                </video>
            </div>

            <div className={style.header.content} >
                <div className={style.header.overlay}>
                <h1 className={style.title} >Welcome to my Doggie page</h1>
                <Link to='/home'>
                    <button className={style.btn} >click here!</button>
                </Link>
                </div>
            </div>
        </div>
    )
}