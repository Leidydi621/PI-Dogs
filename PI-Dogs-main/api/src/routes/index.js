const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const dogs = require('./Dogs');
const dogById = require('./Dog');
const temp = require('./Temperaments');
const dogCreate = require('./DogCreate')

const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/', dogs);
router.use('/dogs', dogById);
router.use('/temperament', temp);
router.use('/dog', dogCreate);




module.exports = router;