/* 4️⃣ ***REDUCER*** 4️⃣ */

// Importa las action-types aquí.
import {
   GET_ALL_DOGS,
   GET_DOG_DETAIL,
   CREATE_DOG,
   BREED_DOG_ORDER,
   BREED_DOG_FILTER,
   BREED_DOG_FILTER_ORIGIN,
   BREED_DOG_FILTER_TEMPERAMENT,
   GET_TEMPERAMENTS,
   FILTER_OPTIONS_TEMPS,
   FILTER_TEMPERAMENT,
   FILTER_ALTURA
 } from '../actions';
 
 const initialState = {
    dogs: [],
    dogDetail: {},
    filteredDogs: [],
    dogsTemperament: [],
    temperaments: [],
    filteredTemps: [],
    rulesValidation: {
      pesomin: 5,
      pesomax: 80,
      alturamin: 15,
      alturamax: 100,
      vidamin: 2,
      vidamax: 35
    }
 };
 
 const rootReducer = (state = initialState, action) => {
   const liveFilter = (breed) => {
      return breed.nombre.toUpperCase().includes(action.payload) 
      || breed.id === Number(action.payload) 
   }
   const originFilter = (breed) => {
      if(action.payload === 'all') return true
      return breed.origen.includes(action.payload) 
   }

   const dogTemperamentFilter = (dog) => {
      return dog.temperaments?.includes(action.payload)
      || dog.temperaments?.some(temp => temp.name === action.payload)
   }

   const temperamentFilter = (temp) => {
      return temp.name.toLowerCase().includes(action.payload.toLowerCase())
   }

   const antiFilterTemp = (temp) => {
      return temp.name.toLowerCase() !== action.payload.toLowerCase()
   }

   const heigthFilter = (dog) => {
      const {min, max} = action.payload
      return dog.alturamin >= min && dog.alturamax <= max
   }

   switch (action.type) {
      case FILTER_ALTURA: return {
         ...state,
         filteredDogs: state.dogs.filter(heigthFilter)
      }
      case CREATE_DOG: return {
         ...state
   }

   case FILTER_TEMPERAMENT: return {
      ...state,
      filteredTemps: state.temperaments.filter(temperamentFilter)
   }

   case FILTER_OPTIONS_TEMPS: return {
      ...state,
      filteredTemps: state.temperaments.filter(antiFilterTemp)
   }
   
   case BREED_DOG_FILTER_TEMPERAMENT: return {
      ...state,
      filteredDogs: state.dogs.filter(dogTemperamentFilter)
   }

   case GET_TEMPERAMENTS: return {
      ...state,
      temperaments: action.payload.sort((t0, t1) => {
         let temp0 = t0.name.toUpperCase();
         let temp1 = t1.name.toUpperCase();
         return (temp0 < temp1) 
            ? -1 
            : (temp0 > temp1) 
            ? 1 
            : 0;
      })
      }

   case GET_ALL_DOGS: return {
        ...state,
        dogs: action.payload,
        filteredDogs: action.payload
      }

   case BREED_DOG_FILTER: return {
          ...state,
          filteredDogs: state.dogs.filter(liveFilter)
      }

   case BREED_DOG_FILTER_ORIGIN: return {
      ...state,
      filteredDogs: state.dogs.filter(originFilter)
      }

   case GET_DOG_DETAIL: return {
      ...state,
      dogDetail: action.payload
      }

   case BREED_DOG_ORDER: {
      if(action.payload === "AZ") return {
         ...state,
         filteredDogs: state.filteredDogs.sort((breed0, breed1) => {
         let nombre0 = breed0.nombre.toUpperCase();
         let nombre1 = breed1.nombre.toUpperCase();
         return (nombre0 < nombre1) 
            ? -1 
            : (nombre0 > nombre1) 
            ? 1 
            : 0;
      })}
      if(action.payload === "ZA") return {
         ...state,
         filteredDogs: state.filteredDogs.sort((breed0, breed1) => {
            let nombre0 = breed0.nombre.toUpperCase();
            let nombre1 = breed1.nombre.toUpperCase();
            return (nombre0 > nombre1) 
               ? -1 
               : (nombre0 < nombre1) 
               ? 1 
               : 0;
      })}
      if(action.payload === "RANDOM") return {
         ...state,
         filteredDogs: state.filteredDogs.sort(() => Math.random() - 0.5)
      }
      return {...state}
   }

   default: return {
        ...state
     }
    }
  };
  
  export default rootReducer;
 