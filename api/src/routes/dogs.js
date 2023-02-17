const { Dog } = require('../models/relations')
const { findDogs, findDogById, newBreedDog } = require('../controllers/dog.controller')

const getDogs = async (req, res) => {
    try {
        const {name} = req.query
        const doge = await findDogs(name)
        res.json(doge)
    } catch (error) {
        res.status(404).json({error})
    }
}

const getDogById = async(req, res) => {
    try {
        const {id} = req.params
        const doge = await findDogById(id)
        res.json(doge)
    } catch (error) {
        res.status(404).json(error)
    }
}
const createDog = async (req,res) => {
    try {
        const doge = await newBreedDog(req.body)
        res.json(doge)
    } catch (error) {
        res.status(404).json(error)
    }
}

module.exports = {createDog, getDogs, getDogById}