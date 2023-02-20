const { Temperament } = require('../models/relations')
const {newTemp, allTemps, getApiData} = require('../controllers/temperament.controller')

const createTemperament = async (req, res) => {
    try {
        const data = await newTemp(req.body)
        return res.json(data)
    } catch (error) {
        res.status(404).json(error)
    }
}

const getTemperaments = async (req, res) => {
    try {
        const data = await allTemps(req.query)
        res.json(data)
    } catch (error) {
        res.status(404).json(error)
    }
}

const insertDataApi = async (req, res) => {
    try {
        const data = await getApiData()
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json(error)
    }
}

module.exports = {createTemperament, getTemperaments, insertDataApi}