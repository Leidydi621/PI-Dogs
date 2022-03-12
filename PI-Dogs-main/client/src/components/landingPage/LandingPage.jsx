import React from 'react';
import {Link} from 'react-router-dom';
// import style from './LandingPage.module.css'



export default function LandingPage() {
    return (
        <div >


            <div  >

                <div ></div>
                <div >
                <h1 >Welcome to my Doggie page</h1>
                <Link to='/home'>
                    <button  >click here!</button>
                </Link>
                </div>
            </div>
        </div>
    )
}