const { Router } = require('express');
const {Temperament} = require('../db')

//importo las funciones del controlador 
const {getApiInfo} = require('../controllers/dogs')

const router = Router();

/*GET /temperament:
Obtener todos los temperamentos posibles
En una primera instancia deberán obtenerlos desde la API externa y guardarlos
en su propia base de datos y luego ya utilizarlos desde allí */


router.get('/', async (req, res) => {
    
    const dogApiTemp = await getApiInfo();
    const allDogTemp = dogApiTemp.map(el => {
            return el.temperament;
    })
    const eachTemp = allDogTemp.toString().split(/\s*,\s*/).filter(e => e !== "");

    for (elem of eachTemp) {
        Temperament.findOrCreate({
            where: {
                name: elem,
            }
        })
    }

    const allTemp = await Temperament.findAll({
        order: [
            ['name', 'ASC']
        ]
    })

    res.send(allTemp);   
})



module.exports = router;