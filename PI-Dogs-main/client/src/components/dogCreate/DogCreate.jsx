import React from "react";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import {postDog, getTemp} from '../../actions'

import style from './DogCreate.module.css'



function validate (input){
    const errors = {};
    if (!input.name) errors.name = 'Name is required';
    if (input.weight < 1 || input.weight > 100) errors.weight =  'Weight Min is required';
    if (input.height < 1 || input.height > 100) errors.height = 'Height Min is required';
    if (input.life_span < 1 || input.life_span > 100) errors.life_span = 'Must be greater than 0';
    return errors;
}

export default function DogCreate(){
    const dispatch = useDispatch();
    const temperaments = useSelector((state) => state.temperaments)
    const history = useHistory();
    const [errors, setErrors] = useState({})
    const [change, setChange] = useState(false);

    const [input, setInput] = useState({
        name:'',
        weight: '',
        height: '',
        life_span: '',
        temperament: []
    })


    useEffect(() => { 
        dispatch(getTemp())
    }, [dispatch])    


    const handleInputChange = (e) => {  
        e.preventDefault()
       setInput((input)=>{
           const newInput={
             ...input,
             [e.target.name]: e.target.value
           }
           const error = validate(newInput);
           setErrors(error);
           return newInput;
         })
         
    }

    function handleSelect(e){
        setInput({
            ...input,
            temperament: [...input.temperament, e.target.value]
        })
    }

    function handleDelete (el){
        setInput({
            ...input,
            temperament: input.temperament.filter(item => item !== el) 
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
      if( input.name  && 
        input.weight && 
        input.height &&
        input.life_span &&
        input.temperament
      ){
        dispatch(postDog(input));
        alert("Congratulation","Your pet has been created!", "success")
        setInput({
            name:'',
            weight: '',
            height: '',
            life_span: '',
            image: "",
            temperament: []
        })}
        setChange(!change)
        history.push('/home');
    }

    return (
        <div className={style.bkg}>
        <div className={style.create}>
            <h1 className={style.msg}>Registra a tu mejor amigo!</h1>

            <form onSubmit={e => handleSubmit(e)}>
                <div  className={style.form}>
                    <div className={style.prettierForm}>
                    <div  className={style.nameInput}>
                        <label className={style.msgs}>Name:</label>
                        <input name="name" type="text" value={input.name} onChange={e => handleInputChange(e)}/>
                        {errors.name && (
                            <span className="errors" >{errors.name}</span>
                        )}
                    </div>
                    <div className={style.nameInput}>
                        <label className={style.msgs} >Weight</label>
                        <input name="weight" type="number" value={input.weight} onChange={e => handleInputChange(e)}/>
                        {errors.weight && (
                            <span className="errors">{errors.weight}</span>
                        )}
                    </div>
                    <div className={style.nameInput}>
                        <label className={style.msgs} >Height:</label>
                        <input name="height" type="number" value={input.height} onChange={e => handleInputChange(e)}/>
                        {errors.height && (
                            <span className="errors" >{errors.height}</span>
                        )}
                    </div>
                    <div className={style.nameInput}>
                        <label className={style.msgs} >Life span:</label>
                        <input name="life_span" type="number" value={input.life_span} onChange={e => handleInputChange(e)}/>
                        {errors.life_span && (
                            <span className="errors" >{errors.height}</span>
                        )}
                    </div>

                    <div className={style.nameInput}>
                    <label className={style.msgs} >Image:</label>
                        <input name="Image" type="url"  value={input.image} placeholder="http://myimageontheweb.com.." onChange={e => handleInputChange(e)}/>
                        {errors.life_span && (
                            <span className="errors" >{errors.height}</span>
                        )}

                    </div>
                    </div>     
                    <div className={style.section}>
                        <label >Temperament Types:</label>
                         <select onChange={(e)=>handleSelect(e)} className={style.selectTemp}>
                            {temperaments?.map((temp) => {
                             return (
                                <option key={temp.id} value={temp.name}>
                                 {temp.name}
                                </option>
                             );
                            })}
                        </select>
                    </div>
                </div>
            <div className={style.boxSelectTemp}>
           
                 {input.temperament.map(el =>
                     <div className={style.temps} key={el}> <p key={el}>{el}</p> 
                         <button className={style.btnDelete} onClick={()=> handleDelete(el)}>X</button>
                     </div>
                 )}   
            </div>
                <div>
                    <button className={style.submitButton} type="submit" disabled = {input.temperament.length < 2 || input.temperament.length >= 5 ? true : false}> Create Dog</button>
                </div>
            <Link to='/home'>
                <button className={style.goBackButton}>Go back</button>
            </Link>

            </form>
        </div>
        </div>
    )

}


