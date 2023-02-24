export const GET_DOG_DETAIL = 'GET_DOG_DETAIL';
export const CREATE_DOG = 'CREATE_DOG';
export const DELETE_DOG = 'DELETE_DOG';
export const BREED_DOG_ORDER = 'BREED_DOG_ORDER';
export const GET_ALL_DOGS = 'GET_ALL_DOGS';
export const BREED_DOG_FILTER = 'BREED_DOG_FILTER';
export const BREED_DOG_FILTER_ORIGIN = 'BREED_DOG_FILTER_ORIGIN'
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS'
export const BREED_DOG_FILTER_TEMPERAMENT = 'BREED_DOG_FILTER_TEMPERAMENT'
export const FILTER_TEMPERAMENT = 'FILTER_TEMPERAMENT'
export const FILTER_OPTIONS_TEMPS = 'FILTER_OPTIONS_TEMPS'

export const getAllDogs = () => {
    return async (dispatch) => {
        try {
            let res = await fetch('http://192.168.1.119:3001/dogs/')
            let data = await res.json()
            const dataSanitized = data.map(breed => {
                if(typeof breed.temperaments === 'string'){
                    const arrTemp = breed.temperaments?.split(',')
                    const tempsLimpio = arrTemp.map(temp => temp.trim())
                    return {...breed, temperaments: { name: tempsLimpio}}
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
    return async (dispatch) => {
        try {
            let res = await fetch(`http://192.168.1.119:3001/dogs/${id}`)
            let data = await res.json()
            return dispatch({type: GET_DOG_DETAIL, payload: data})
        } catch (error) {
            console.log(error)   
        }
    }
};

export const getTemperaments = () => {
    return async (dispatch) => {
        try {
            let res = await fetch(`http://192.168.1.119:3001/temperaments/`)
            let data = await res.json()
            return dispatch({type: GET_TEMPERAMENTS, payload: data})
        } catch (error) {
            console.log(error)   
        }
    }
};

export const createDog = (dataForm) => {
    return async (dispatch) => {
        try {
            let res = await fetch('http://192.168.1.119:3001/dogs/', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataForm)
            })
            if(res.ok) return dispatch({type: CREATE_DOG});
            const err = await res.json()
            return err
        } catch (error) {
            console.log(error);
        }
    }
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

export const filterOrigin = (origin) => {
    return {type: BREED_DOG_FILTER_ORIGIN, payload: origin}
};

export const filterDogTemperaments = (name) => {
    return {type: BREED_DOG_FILTER_TEMPERAMENT, payload: name}
}

export const filterTemperaments = (name) => {
    return {type: FILTER_TEMPERAMENT, payload: name}
}

export const antiFilterTemp = (name) => {
    return {type: FILTER_OPTIONS_TEMPS, payload: name}
}