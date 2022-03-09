import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDogByName } from '../../actions';

export default function SearchBar(){
    const dispatch = useDispatch();
    const [input, setInput] = useState('');

    function handleChange(e){
        e.preventDefault();
        setInput(e.target.value);
    }

    function handleSubmit (e){
        try {
            dispatch(getDogByName(input));
        } catch (e) {
            return e;
        }
        setInput('')

    }

    return(
        <div >
            <input  type="text" placeholder="Search Dog by name" value={input} onChange={e => handleChange(e)}/>
            <button type="submit" onClick={e => handleSubmit(e)}>Search</button>
        </div>
    )
    
}