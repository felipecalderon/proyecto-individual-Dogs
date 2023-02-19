const { Router } = require('express');
const {createDog, getDogs, getDogById} = require('./dogs');
const {createTemperament, getTemperaments, insertDataApi} = require('./temperament');


const router = Router();

// RUTAS DOGS
router.get('/dogs', getDogs);
router.get('/dogs/:id', getDogById);
router.post('/dogs', createDog);

// RUTAS TEMPERAMENTS
router.post('/temperaments', createTemperament);
router.get('/temperaments', getTemperaments);

//ruta para introducir la data desde API externa
router.get('/apiadd', insertDataApi)


module.exports = router;
