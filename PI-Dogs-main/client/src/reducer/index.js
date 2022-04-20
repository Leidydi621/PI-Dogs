import {
    GET_DOGS, 
    FILTER_CREATED, 
    GET_TEMPERAMENT, 
    FILTER_TEMP, 
    FILTER_WEIGTH, 
    ALPHABETICAL_SORT,
    GET_DOG_BY_NAME,
    GET_DOG_BY_ID,
    CREATE_DOG,
} from '../actions'

const initialState = {
    dogs : [],
    temperaments : [],
    detail : [],
}



function rootReducer ( state = initialState, action){
    switch (action.type) {
        case GET_DOGS:
            return{
                ...state,
                dogs : action.payload,
                allDogs : action.payload,
            }

        case FILTER_CREATED:
            const createdFilter = action.payload === 'db' ? state.allDogs.filter(e => e.createdInDb) : state.allDogs.filter(e => !e.createdInDb)
            
            return{
                ...state,
                dogs : createdFilter,
            }

        case GET_TEMPERAMENT:
         
            return{
                ...state,
                temperaments: action.payload,
            }
        
        case FILTER_TEMP:
            const result= action.payload
            const typesTemp =  state.allDogs.filter(dog => {
                if(dog.temperaments){
                    const temperament = dog.temperaments.map( dog => dog.name)
                    return temperament.includes(action.payload)
                } if(dog.temperament){
                    return dog.temperament.includes(action.payload)
                }
                return null
            })

            return {
                ...state,
                dogs: action.payload === 'sinFiltro' ? result : typesTemp,

            }

        case FILTER_WEIGTH:
            const allDogs2 = state.allDogs
            const allDogsFilter = state.dogs.filter(dog => dog.weight !== null)
            const sortWeightMin = action.payload === 'min' ?
                allDogsFilter.sort((a, b) => {
                    if (a.weight < b.weight) return -1;
                    if (a.weight > b.weight) return 1;
                    return 0;
                }) :
                allDogsFilter.sort((a, b) => {
                    if (a.weight > b.weight) return -1;
                    if (a.weight < b.weight) return 1;
                    return 0;
                })
            return {
                ...state,
                dogs: action.payload === "all" ? allDogs2 : sortWeightMin
            }
        
            case ALPHABETICAL_SORT:   
            let sortedDogs = [...state.dogs]       
            sortedDogs = action.payload === 'atoz' ?
            state.dogs.sort(function(a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
              if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
              return 0;
            }) :
            state.dogs.sort(function(a, b) {
              if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
              if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
              return 0;
            });          
            return {
              ...state,
              dogs: sortedDogs
            }

        case GET_DOG_BY_NAME:
            if (action.payload.length <1){
                alert("Dog not found")
            } else{

                return{
                    ...state,
                    dogs : action.payload
                }
            }
            
        case GET_DOG_BY_ID:
            return {
                ...state,
                detail: action.payload, 
              
            }

        case CREATE_DOG:
            return {
                ...state,
            }     
  
      

            

        default:
            return state;
    }
}

export default rootReducer;