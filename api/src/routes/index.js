const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogs = require('./dogs.js')
const router = Router();

router.use('/dogs', dogs)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
