export const GET_ALL_DOGS = 'GET_ALL_DOGS';
export const GET_DOG_DETAIL = 'GET_DOG_DETAIL';
export const CREATE_DOG = 'CREATE_DOG';
export const DELETE_DOG = 'DELETE_DOG';

export const getAllDogs = () => {
    return async (dispatch) => {
        try {
            let res = await fetch('http://localhost:3210/demodata')
            let data = await res.json()
            return dispatch({type: GET_ALL_DOGS, payload: data});
        } catch (error) {
            console.log(error);
        }
    }
}; 

export const getDogDetail = (id) => {
    return {type: GET_DOG_DETAIL, payload: id}
};

let id = 6;
export const createDog = (bands) => {
    return {type: CREATE_DOG, payload: {...bands, id: id++}}
};

export const deleteDog = (id) => {
    return {type: DELETE_DOG, payload: id}
};