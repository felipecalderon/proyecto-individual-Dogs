const { Temperament } = require('../models/relations')
const {newTemp} = require('../controllers/temperament.controller')

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
        const data = await Temperament.findAll()
        res.json(data)
    } catch (error) {
        res.status(404).json(error)
    }
}

const insertDataApi = async (req, res) => {
    try {
        const resApi = await fetch(process.env.URI_API)
        const dataApi = await resApi.json()
        const temperamentos = []

        dataApi.forEach(dogApi => {
            if(dogApi.temperament){
                let temps = dogApi.temperament.split(',')
                temps.forEach(temp => {
                    const limpio = temp.trim()
                    if(!temperamentos.includes(limpio)) temperamentos.push(limpio)
                })
            }
        })

        const bulkTemps = temperamentos.map(t => {
            return {name: t}
        })

        const oneTemp = await Temperament.findOne({where: bulkTemps[bulkTemps.length - 1]})

        if(!oneTemp){
            await Temperament.bulkCreate(bulkTemps)
        }

        const allTemps = await Temperament.findAll()
        res.json(allTemps)
    } catch (error) {
        res.status(404).json(error)
    }
}
module.exports = {createTemperament, getTemperaments, insertDataApi}