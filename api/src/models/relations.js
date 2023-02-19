const { Dog } = require('./dog')
const { Temperament } = require('./temperament')

Temperament.belongsToMany(Dog, {
    through: "dogTemperament",
    timestamps: false
})

Dog.belongsToMany(Temperament, {
    through: "dogTemperament",
    timestamps: false
})

module.exports = { Dog, Temperament }