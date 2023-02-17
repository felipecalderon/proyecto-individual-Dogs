const { Dog } = require('../models/relations')

const findDogs = async (name) => {
    try {

    if(!name) return await Dog.findAll()
    const doge = await Dog.findAll({
        where: {
            nombre: name
            }
        })
    return doge

    } catch (error) {
        return error
    }
}

const findDogById = async (id) => {
    try {
        const doge = await Dog.findByPk(id)
        if(doge === null) return []
        return doge
    } catch (error) {
        return error
    }
}

const newBreedDog = async ({nombre, imagen, altura, peso, anios, arrTemperamentosId}) => {
        if(!anios || !peso || !altura || !imagen || !nombre) throw 'Faltan datos papu'
        const doge = await Dog.create({
            nombre, 
            imagen, 
            altura, 
            peso, 
            anios, 
            arrTemperamentosId
        })
        doge.addTemperament(arrTemperamentosId)
        return doge
}

module.exports = {findDogs, findDogById, newBreedDog}