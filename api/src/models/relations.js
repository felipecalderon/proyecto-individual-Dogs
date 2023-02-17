const {Dog} = require('./dog')
const {Temperament} = require('./temperament')

Temperament.belongsToMany(Dog, {
    through: "dogTemperament"
})

Dog.belongsToMany(Temperament, {
    through: "dogTemperament"
})

module.exports = {Dog, Temperament}