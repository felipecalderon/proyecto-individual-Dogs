const { Router } = require('express');
// Importar todos los routers;
const home = require('./home.js');


const router = Router();

// Configurar los routers
router.use('/dog', home.root);


module.exports = router;
