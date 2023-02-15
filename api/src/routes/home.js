const { Dog } = require('../models/Dog')

const getDogs = async (req, res) => {
    try {
        const {name} = req.query
        if(name){
            const doges = await Dog.findAll({where: {
                nombre: name
            }})
            if(doges.length === 0) throw `No hay perro llamado ${name}`
            return res.json(doges)
        }
        const doges = await Dog.findAll()
        res.json(doges)
    } catch (error) {
        res.json({error})
    }
}

const getDogById = async(req, res) => {
    try {
        const {id} = req.params
        const doge = await Dog.findByPk(id)
        res.json(doge)
    } catch (error) {
        res.json({error: `No se encontró el dog, error code: ${error.parent.code}`})
    }
}
const createDog = async (req,res) => {
    try {
        const {nombre, imagen, altura, peso, anios} = req.body
        if(!nombre || !imagen || !altura || !peso || !anios) throw `faltan datos`
        const doge = await Dog.create({nombre, imagen, altura, peso, anios})
        res.json(doge)

    } catch (error) {
        const cantidad = error.errors?.length
        if(cantidad && cantidad > 0) return res.json({error: error.errors})
        res.json({error: error.original?.detail || error})
        console.log(error.original?.detail || error)
    }
}

module.exports = {createDog, getDogs, getDogById}