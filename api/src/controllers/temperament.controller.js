const { Temperament } = require('../models/relations')

const newTemp = async ({name}) => {
    try {
        if(!name) throw 'Falta nombre del temperamento papu'
        const data = await Temperament.create({name})
        return data
    } catch (error) {
        throw error
    }
} 

module.exports = { newTemp }