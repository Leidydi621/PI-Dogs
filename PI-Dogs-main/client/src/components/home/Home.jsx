import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    getDogs, 
    filterCreated, 
    getTemp, 
    filterTemp,
    filterByWeigth,
    aplhabeticalSort,
} from '../../actions';
import {Link} from 'react-router-dom';

import Card from '../card/Card';
import Paginado from '../paginado/Paginado';
import SearchBar from '../searchBar/SearchBar';

import style from './Home.module.css'


export default function Home() {
    
    const dispatch = useDispatch();
    const all_Dogs = useSelector((state)=> state.dogs)
    
    const [currentPage, setCurrentPage] = useState(1)
    const [dogsPerPage, setDogsPerPage] = useState(8) 
    const indexOfLastDog = currentPage * dogsPerPage 
    const indexOfFirstDog = indexOfLastDog - dogsPerPage 
    const currentDogs = all_Dogs.slice(indexOfFirstDog, indexOfLastDog)

    const temperaments = useSelector((state)=> state.temperaments)

    const [order, setOrder] = useState('')

    //paginado por numero de paginas
    const paginado =  (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    

    useEffect(()=> {
        dispatch(getDogs());
    },[dispatch])

    useEffect(() => {
        dispatch(getTemp());
    }, [dispatch])


    function handleClick(e){
        e.preventDefault();
        dispatch(getDogs());
    }

    function handleFilterCreated (e){
        dispatch(filterCreated(e.target.value))
    }

    function handleFilterTemp (e){
        e.preventDefault();
        dispatch(filterTemp(e.target.value));
        setCurrentPage(1)
    }

    function handleFilterByWeigth(e){
       e.preventDefault();
       dispatch(filterByWeigth(e.target.value))
       setCurrentPage(1)
       setOrder(`Order'${e.target.value}`) 
    }

    function handleAplhabeticalSort (e){
        e.preventDefault();
        dispatch(aplhabeticalSort(e.target.value))
        setCurrentPage(1)
        setOrder(`Order'${e.target.value}`)
    }

    


    return(
        <div className={style.page}>
            <header className={style.header}>
                <div className={style.container_header}>

            <Link to= '/dog'>
                <button className={style.btn}>
                    Register
                </button>
            </Link>
            <h1 className={style.title}>The Best Friends  </h1>
            <button className={style.btn}  onClick={e => {handleClick(e)}}>
                Charge all!
            </button>
            </div >
            </header>

            <div className={style.container_nav}>
                <div className={style.nav}>
                  <SearchBar/>
                  <div className={style.select}>
                    <select className={style.filter} defaultValue={'DEFAULT'} onChange={handleFilterTemp}>
                        <option value='all'>All Temperaments</option>
                        {temperaments.map(e => (
                            <option key={e.name}>{e.name}</option>
                        ))}
                    </select>
                    <select className={style.order} defaultValue={'DEFAULT'} onChange={e =>{handleFilterByWeigth(e)}}>
                        <option value='min'>Minor weight</option>
                        <option value='maj'>Major weight</option>
                    </select>
                    <select className={style.filter} defaultValue={'DEFAULT'} onChange={e => {handleFilterCreated(e)}}>
                        <option  value= 'DEFAULT' disable selected>All Dogs</option>
                        <option value= 'api'>Exist</option>
                        <option value='db'>Created</option>
                    </select>
                    <select className={style.order} defaultValue={'DEFAULT'} onChange={e => {handleAplhabeticalSort(e)}}>
                        <option value= 'DEFAULT' disable selected >Alphabetical</option>
                        <option value= 'atoz'>A to Z</option>
                        <option value= 'ztoa'>Z to A</option>
                    </select>
                  </div>
                </div>
            <div className={style.paginado}>
                <div className={style.containerP}>
                <Paginado
                    dogsPerPage = {dogsPerPage}
                    allDogs = {all_Dogs.length}
                    paginado = {paginado}
                />
                </div>
             </div>
            </div> 


                <div className={style.content}>
                    <div className={style.gri}>
                    {
                        currentDogs?.map(e =>{
                            return(
                                <Link to = {'/detail/' + e.id} key={e.id}>
                                    <Card 
                                    name={e.name} 
                                    image={e.image? e.image : "https://m1.paperblog.com/i/460/4600328/4-fotos-perritos-tiernos-bonitos-peludos-pant-L-JXPzXg.jpeg"} 
                                    weight={e.weight} 
                                    temperament={e.temperament} 
                                    temperaments={e.temperaments}
                                    ></Card>
                                </Link>
                            )
                        })
                    }
                    </div>
                </div>
            <footer>


                    <div className={style.container_footer}>
                        <div className={style.box_footer}>
                            <div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3egoLK7JiJ3adAUT3AAw6029w-PNIO-G8Hdq0947LCG7LpWd9lP8e3AngBA5Nxnhxw6I&usqp=CAU" alt= "img not found" width= "100px" height= "100px"/>
                            </div>
                        </div>
                        <div className={style.box_footer}>
                            <div>
                                <h2>PI Bootcamp Henry - Dogs</h2>
                            </div>
                        </div>

                    </div>
                </footer>

        </div>
    )

}