export const GET_DOG_DETAIL = 'GET_DOG_DETAIL';
export const CREATE_DOG = 'CREATE_DOG';
export const DELETE_DOG = 'DELETE_DOG';
export const BREED_DOG_ORDER = 'BREED_DOG_ORDER';
export const GET_ALL_DOGS = 'GET_ALL_DOGS';
export const BREED_DOG_FILTER = 'BREED_DOG_FILTER';

export const getAllDogs = () => {
    return async (dispatch) => {
        try {
            // let res = await fetch('http://localhost:3210/demodata')
            let res = await fetch('https://api.thedogapi.com/v1/breeds')
            let data = await res.json()
            let dataAPI = data.map(item => {
                const arrTemperament = item.temperament?.split(" ").join("").split(',')
                return {...item, fuenteData: "apiExterna", temperament: arrTemperament}
            })
            return dispatch({type: GET_ALL_DOGS, payload: dataAPI});
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

export const orderBreeds = (order) => {
    return {type: BREED_DOG_ORDER, payload: order}
};

export const filterBreeds = (name) => {
    name = name.toUpperCase()
    return {type: BREED_DOG_FILTER, payload: name}
};