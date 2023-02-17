const { Temperament } = require('../models/relations')

const createTemperament = async (req, res) => {
    try {
        const {name} = req.body
        if(name){
            const newTemp = await Temperament.findOrCreate({
                where: {
                    name
                }
            })
            return res.json(newTemp)
        }
        throw "Debes ingresar nombre"
    } catch (error) {
        res.json({error})
    }
}

const getTemperaments = async (req, res) => {
    try {
        const resApi = await fetch('https://api.thedogapi.com/v1/breeds')
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
        res.json(error)
    }
}
module.exports = {createTemperament, getTemperaments}