import React from 'react';


export default function Card ({name, image, weight, temperament, temperaments}){
  if(!temperaments){

    return(
    <div>
      <div id = 'card'>
        <h4>Name: {name}</h4>
        <img src ={image} alt= "img not found" width= "150px" height= "150px"/>
        <h5>Weight: {weight} kg.</h5>
        <h5>Temperaments: {temperament}</h5>
      </div>
    </div>
    );
  } else {
    return(
      <div>
      <div id = 'card'>
        <h4>Name: {name}</h4>
        <img src ={image} alt= "img not found" width= "150px" height= "150px"/>
        <h5>Weight: {weight} Kg.</h5>
        <h5 key={name}>Temperaments: {temperaments?.map((temp) => temp.name).join(", ")}</h5>
      </div>
    </div>

    )
  }
}