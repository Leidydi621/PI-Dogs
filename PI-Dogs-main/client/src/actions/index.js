import axios from 'axios';

export const GET_DOGS = 'GET_DOGS'
export const FILTER_CREATED = 'FILTER_CREATED'
export const GET_TEMPERAMENT = 'GET_TEMPERAMENT'
export const FILTER_TEMP = 'FILTER_TEMP'
export const FILTER_WEIGTH = 'FILTER_WEIGTH'
export const ALPHABETICAL_SORT = 'ALPHABETICAL_SORT'


export function getDogs(){
    return function (dispatch){
        return axios.get('http://localhost:3001/dogs', {})
        .then((json) => {
            return dispatch({
                type: GET_DOGS,
                payload: json.data,
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}

export function filterCreated(payload){
    return {
        type: FILTER_CREATED,
        payload 
    }
}

export function getTemperament(){
    return function (dispatch){
        return axios.get('http://localhost:3001/temperament', {})
        .then((json) => {
            return dispatch({
                type: GET_TEMPERAMENT,
                payload: json.data,
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}

export function filterTemp(payload){
    return {
        type: FILTER_TEMP,
        payload
    }
}

export function filterByWeigth(payload){
   
    return{
        type: FILTER_WEIGTH,
        payload
    }
}

export function aplhabeticalSort(payload) {
    return {
        type: ALPHABETICAL_SORT,
        payload
    }
}


