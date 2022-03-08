import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getDogs} from '../../actions';
import {Link} from 'react-router-dom'

import Card from '../card/Card';
import Paginado from '../paginado/Paginado';



export default function Home() {
    
    const dispatch = useDispatch();
    const all_Dogs = useSelector((state)=> state.dogs)
    
    const [currentPage, setCurrentPage] = useState(1)
    const [dogsPerPage, setDogsPerPage] = useState(8) 
    const indexOfLastDog = currentPage * dogsPerPage 
    const indexOfFirstDog = indexOfLastDog - dogsPerPage 
    const currentDogs = all_Dogs.slice(indexOfFirstDog, indexOfLastDog)

    //paginado por numero de paginas
    const paginado =  (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    

    useEffect(()=> {
        dispatch(getDogs());
    },[dispatch])

    function handleClick(e){
        e.preventDefault();
        dispatch(getDogs());
    }

    return(
        <div>
            <Link to= '/dogs'>
                <button >
                    Register your Dog here!
                </button>
            </Link>
            <h1>The Best Friends  </h1>
            <button  onClick={e => {handleClick(e)}}>
                Charge all dogs again!
            </button>
            <div>
                <select defaultValue={'DEFAULT'}>
                    <option value='all'>All Temperaments</option>
                </select>
                <select defaultValue={'DEFAULT'}>
                    <option value='min'>Minor weight</option>
                    <option value='maj'>Major weight</option>
                </select>
                <select defaultValue={'DEFAULT'}>
                    <option  value= 'DEFAULT' disable selected>All</option>
                    <option value= 'api'>Exist</option>
                    <option value='db'>Created</option>
                </select>
                <select defaultValue={'DEFAULT'}>
                    <option value= 'DEFAULT' disable selected >Alphabetical</option>
                    <option value= 'atoz'>A to Z</option>
                    <option value= 'ztoa'>Z to A</option>
                </select>

                <Paginado
                dogsPerPage = {dogsPerPage}
                allDogs = {all_Dogs.length}
                paginado = {paginado}
                />


                <div>
                    {
                        currentDogs?.map(e =>{
                            return(
                                <Link to = {'/detail/' + e.id} key={e.id}>
                                    <Card name={e.name} image={e.image} weight={e.weight} temperament={e.temperament} temperaments={e.temperaments}></Card>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )

}