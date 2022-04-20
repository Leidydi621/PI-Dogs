import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDogById } from '../../actions';
import {Link} from 'react-router-dom';

import style from './DogDetail.module.css';

export default function Detail (props){

    const myDog = useSelector((state) => state.detail)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDogById(props.match.params.id));
    },[dispatch])


    return (
        <div className={style.container}>
            {
                myDog.length>0 ?
                <div>
                    <div>
                        <img className={style.img} src={myDog[0].image? myDog[0].image : "https://m1.paperblog.com/i/460/4600328/4-fotos-perritos-tiernos-bonitos-peludos-pant-L-JXPzXg.jpeg"} alt= "img not found" width= "300px" height= "300px" />
                    </div>
                    <div className={style.containerCard}>
                    <div className={style.card}>
                        <h1>{myDog[0].name}</h1>
                        <h2>Weight: {myDog[0].weight}</h2>
                        <h2>Height: {myDog[0].height}</h2>
                        <h2>Life span: {myDog[0].life_span}</h2>
                        <h4>Temperaments: {!myDog[0].createdInDb? myDog[0].temperament : myDog[0].temperaments.map(el => el.name + (', '))}</h4>
                        <Link to='/home'>
                          <button className={style.btn}>Go Back</button>
                        </Link>

                    </div>
                    </div>

                </div> : <p>Loading...</p>
            }

        </div>
    )

}
