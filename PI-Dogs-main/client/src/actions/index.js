import axios from 'axios';

export const GET_DOGS = 'GET_DOGS'


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