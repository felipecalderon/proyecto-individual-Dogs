/* 4️⃣ ***REDUCER*** 4️⃣ */

// Importa las action-types aquí.
import {
   GET_ALL_DOGS,
   GET_DOG_DETAIL,
   CREATE_DOG,
   DELETE_DOG,
   BREED_DOG_ORDER,
   BREED_DOG_FILTER

 } from '../actions';
 
 const initialState = {
    dogs: [],
    filteredDogs: [],
    dogDetail: {},
 };
 
 const rootReducer = (state = initialState, action) => {
   const liveFilter = (breed) => {
      return breed.nombre.toUpperCase().includes(action.payload) 
      || breed.id === Number(action.payload) 
   }

   switch (action.type) {
   case GET_ALL_DOGS: return {
        ...state,
        dogs: action.payload,
        filteredDogs: action.payload
      }

   case BREED_DOG_FILTER: return {
          ...state,
          filteredDogs: state.dogs.filter(liveFilter)
      }
   case GET_DOG_DETAIL: return {
      ...state,
      dogDetail: state.dogs.find(dog => dog.id === Number(action.payload))
   }

   case BREED_DOG_ORDER: {
      if(action.payload === "AZ") return {
         ...state,
         filteredDogs: state.dogs.sort((breed0, breed1) => {
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
         filteredDogs: state.dogs.sort((breed0, breed1) => {
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
         filteredDogs: state.dogs.sort(() => Math.random() - 0.5)
      }
   }
   default: return {
        ...state
     }
    }
  };
  
  export default rootReducer;
 