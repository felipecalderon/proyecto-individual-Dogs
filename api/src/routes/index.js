const { Router } = require('express');
// Importar todos los routers;
const {createDog, getDogs, getDogById} = require('./dogs');
const {createTemperament, getTemperaments} = require('./temperament');


const router = Router();

// Configurar los routers
router.get('/dogs', getDogs);
router.get('/dogs/:id', getDogById);
router.post('/dogs', createDog);

router.post('/temperaments', createTemperament);
router.get('/temperaments', getTemperaments);



module.exports = router;
