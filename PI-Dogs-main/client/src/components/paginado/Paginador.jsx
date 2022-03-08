import React from "react";



export default function Paginado({DogsPerPage, allDogs, paginado}){
    const pageNumbers = [];

    for (let i = 1; i<= Math.ceil(allDogs/DogsPerPage); i++) {
        pageNumbers.push(i)
    }

    return(
        <nav>
            {pageNumbers && pageNumbers.map(number => (
                <button key={number} onClick={() => paginado(number)}>{number}</button>
            ))}
        </nav>
    )
}