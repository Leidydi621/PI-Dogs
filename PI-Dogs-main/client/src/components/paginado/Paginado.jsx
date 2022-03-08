import React from'react';

export default function Paginado({dogsPerPage, allDogs, paginado}){

    const pageNumber= []

    for(let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++){
        pageNumber.push(i)
    }

    return(
        <nav>
            <ul>
                {pageNumber?.map(num => {
                    return(
                      <button key={num} onClick={()=> paginado(num)}>{num}</button>
                    )
                    
                })}
            </ul>
        </nav>
    )
}