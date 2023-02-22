const { Dog, Temperament } = require('../models/relations')
const {fn, where, col, Op} = require("sequelize")

const findDogs = async ({name}) => {
    try {
    const resp = await fetch(process.env.URI_API)
    const data = await resp.json()

    const arrApi = data.map(dog => {
        let vida = dog.life_span.split(' ')
        let alturamin = Number(dog.height.metric.split(" - ")[0]) 
        let alturamax = Number(dog.height.metric.split(" - ")[1]) 
        let pesomin = Number(dog.weight.metric.split(" - ")[0]) 
        let pesomax = Number(dog.weight.metric.split(" - ")[1]) 
        let vidamin = Number(vida[0])
        let vidamax = Number(vida[2]) 
        let temperaments = dog.temperament?.split(',').map(t => t.trim())

        return {
            id: dog.id,
            nombre: dog.name,
            imagen: dog.image.url,
            origen: "externo",
            alturamin, alturamax, pesomin, pesomax, vidamin, vidamax, temperaments
        }
    })
        //SI NO VIENE UN NAME EN REQ QUERY ENTREGO TODOS LOS DOGS
    if(!name) {
        const doge = await Dog.findAll({
            include: {model: Temperament}
        })
        return [...doge, ...arrApi]
    }

        // SI VIENE NAME, AGREGO WHERE AL FINDALL, AMBOS CASOS INCLUYO EL MODELO DE TEMPERAMENTOS
    const minusc = name.toLowerCase()
    const doge = await Dog.findAll({
        where: {
            // nombre: where(fn("LOWER", col('nombre')), "LIKE", `%${minusc}%`)
            nombre: {
                [Op.iLike]: `%${minusc}%`
            }
        },
        include: { 
            model: Temperament
            },
        })
    if(!doge) throw `No se encontró ${name}`
    return doge

    } catch (error) {
        throw error
    }
}

const findDogById = async (id) => {
    try {        
        //BUSCAR EN DATA API
        const resp = await fetch(process.env.URI_API)
        const data = await resp.json()
        if(!isNaN(Number(id))){
            const findApi = data.find(dog => dog.id === Number(id))
            let vida = findApi.life_span?.split(' ')
            let alturamin = Number(findApi.height.metric.split(" - ")[0]) 
            let alturamax = Number(findApi.height.metric.split(" - ")[1]) 
            let pesomin = Number(findApi.weight.metric.split(" - ")[0]) 
            let pesomax = Number(findApi.weight.metric.split(" - ")[1]) 
            let vidamin = Number(vida[0])
            let vidamax = Number(vida[2]) 
            let temperaments = findApi.temperament?.split(',').map(t => t.trim())
            const formatted = {
                id: findApi.id,
                nombre: findApi.name,
                imagen: findApi.image.url,
                origen: "externo",
                alturamin, alturamax, pesomin, pesomax, vidamin, vidamax, temperaments
            }
            if(findApi) return formatted
        }

        //BUSCAR EN BD
        const doge = await Dog.findByPk(id, {
            include: { 
                model: Temperament
                },
        })
        return doge
    } catch (error) {
        console.log(error)
        throw `Raza con id: ${id} no encontrada`
    }
}

const newBreedDog = async ({nombre, imagen, alturamin, alturamax, pesomin, pesomax, vidamin, vidamax, arrTemperamentosId}) => {
    try {
        if(!nombre || !imagen || !alturamin || !alturamax || !pesomin || !pesomax || !vidamin || !vidamax) throw 'Faltan datos papu'
        const doge = await Dog.create({
            origen: "database",
            nombre, 
            imagen, 
            alturamin, 
            alturamax, 
            pesomin, 
            pesomax, 
            vidamin, 
            vidamax, 
            arrTemperamentosId
        })
        if(arrTemperamentosId && arrTemperamentosId.length > 0) await doge.addTemperament(arrTemperamentosId)
        return doge
    } catch (error) {
        throw error
    }
}

module.exports = {findDogs, findDogById, newBreedDog}