const { Dog } = require('../models/Dog')

const root = async (req,res) => {
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

module.exports = {root}