import React from 'react';
import style from './Card.module.css'


export default function Card ({name, image, weight, temperament, temperaments}){
  if(!temperaments){

    return(
      <div className={style.bodyCard}>
        <div className={style.container}>
          <div className={style.card} id = 'card'>
            <div className={style.img}>
              <img  src ={image} alt= "img not found" width= "100%" height= "180px"/>
            </div>
            <div className={style.info}>
              <h4>Name: {name}</h4>
              <h5>Weight: {weight} kg.</h5>
              <h5>Temperaments: {temperament}</h5>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return(
      <div className={style.bodyCard}>
        <div className={style.container}>
          <div className={style.card} id = 'card'>
            <div className={style.img}>
              <img src ={image} alt= "img not found" width= "150px" height= "150px"/>
            </div>
            <div className={style.info}>
              <h4>Name: {name}</h4>
              <h5>Weight: {weight} Kg.</h5>
              <h5 key={name}>Temperaments: {temperaments?.map((temp) => temp.name).join(", ")}</h5>
            </div>
          </div>
        </div>
      </div>
    )
  }
}