const { findDogs, findDogById, newBreedDog } = require('../controllers/dog.controller')

const getDogs = async (req, res) => {
    try {
        const doge = await findDogs(req.query)
        res.status(200).json(doge)
    } catch (error) {
        res.status(404).json(error)
    }
}

const getDogById = async(req, res) => {
    try {
        const {id} = req.params
        const doge = await findDogById(id)
        res.status(200).json(doge)
    } catch (error) {
        res.status(404).json(error)
    }
}

const createDog = async (req,res) => {
    try {
        const doge = await newBreedDog(req.body)
        res.status(200).json(doge)
    } catch (error) {
        res.status(404).json(error)
    }
}

module.exports = {createDog, getDogs, getDogById}