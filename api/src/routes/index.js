const { Router } = require('express');
const {createDog, getDogs, getDogById, updateDog, deleteDog} = require('./dogs');
const {createTemperament, getTemperaments, insertDataApi} = require('./temperament');


const router = Router();

// RUTAS DOGS
router.get('/dogs', getDogs);
router.get('/dogs/:id', getDogById);
router.post('/dogs', createDog);
router.put('/dogs/:id', updateDog);
router.delete('/dogs/:id', deleteDog);

// RUTAS TEMPERAMENTS
router.post('/temperaments', createTemperament);
router.get('/temperaments', getTemperaments);

//ruta para introducir la data desde API externa
router.get('/apiadd', insertDataApi)


module.exports = router;
