const { Router } = require('express');
// Importar todos los routers;
const {createDog, getDogs, getDogById} = require('./dogs.js');

const router = Router();

// Configurar los routers
router.get('/dogs', getDogs);
router.get('/dogs/:id', getDogById);
router.post('/dogs', createDog);


module.exports = router;
