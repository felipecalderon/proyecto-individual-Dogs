export const GET_DOG_DETAIL = 'GET_DOG_DETAIL';
export const CREATE_DOG = 'CREATE_DOG';
export const DELETE_DOG = 'DELETE_DOG';
export const BREED_DOG_ORDER = 'BREED_DOG_ORDER';
export const GET_ALL_DOGS = 'GET_ALL_DOGS';
export const BREED_DOG_FILTER = 'BREED_DOG_FILTER';

export const getAllDogs = () => {
    return async (dispatch) => {
        try {
            let res = await fetch('http://localhost:3001/dogs/')
            let data = await res.json()
            const dataSanitized = data.map(breed => {
                if(typeof breed.temperaments === 'string'){
                    const arrTemp = breed.temperaments?.split(',')
                    const tempsLimpio = arrTemp.map(temp => temp.trim())
                    return {...breed, temperaments: tempsLimpio}
                }
            return breed
            })
            return dispatch({type: GET_ALL_DOGS, payload: dataSanitized});
        } catch (error) {
            console.log(error);
        }
    }
}; 

export const getDogDetail = (id) => {
    return {type: GET_DOG_DETAIL, payload: id}
};


export const createDog = (dataDog) => {
    return {type: CREATE_DOG, payload: {}}
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