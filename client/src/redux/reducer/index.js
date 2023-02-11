/* 4️⃣ ***REDUCER*** 4️⃣ */

// Importa las action-types aquí.
import {
    GET_ALL_DOGS,
    GET_DOG_DETAIL,
    CREATE_DOG,
    DELETE_DOG,
 } from '../actions';
 
 const initialState = {
    dogs: [],
    dogDetail: {},
 };
 
 const rootReducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
     case GET_ALL_DOGS: return {
        ...state,
        dogs: action.payload
     }
     
     case GET_DOG_DETAIL: return {
        ...state,
        dogDetail: action.payload
     }
     
     case CREATE_DOG: return {
        ...state,
        dogs: [...state.dogs, action.payload]
     }
  
     case DELETE_DOG: return {
        ...state,
        dogs: state.dogs.filter(dog => dog.id !== action.payload)
     }
  
     default: return {
        ...state
     }
    }
  };
  
  export default rootReducer;
 