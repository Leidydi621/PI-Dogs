import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDogById } from '../../actions';
import {Link} from 'react-router-dom';

export default function Detail (props){

    const myDog = useSelector((state) => state.detail)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDogById(props.match.params.id));
    },[dispatch])


    return (
        <div>
            {
                myDog.length>0 ?
                <div>
                    <h1>{myDog[0].name}</h1>
                    <img src={myDog[0].image } alt= "img not found" width= "300px" height= "300px" />
                    <h2>Weight: {myDog[0].weight}</h2>
                    <h2>Height: {myDog[0].height}</h2>
                    <h2>Life span: {myDog[0].life_span}</h2>
                    <h4>Temperaments: {!myDog[0].createdInDb? myDog[0].temperament : myDog[0].temperaments.map(el => el.name + (', '))}</h4>

                </div> : <p>Loading...</p>
            }

            <Link to='/home'>
                <button>Go Back</button>
            </Link>
        </div>
    )

}
