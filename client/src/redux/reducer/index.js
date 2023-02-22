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
 } from '../actions';
 
 const initialState = {
    dogs: [],
    filteredDogs: [],
    dogDetail: {},
    temperaments: [],
    dogsTemperament: []
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

   const temperamentFilter = (dog) => {
      return dog.temperaments?.includes(action.payload)
      || dog.temperaments?.some(temp => temp.name === action.payload)
   }

   switch (action.type) {
   case BREED_DOG_FILTER_TEMPERAMENT: return {
      ...state,
      filteredDogs: state.dogs.filter(temperamentFilter)
   }
   case GET_TEMPERAMENTS: return {
      ...state,
      temperaments: action.payload
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
 