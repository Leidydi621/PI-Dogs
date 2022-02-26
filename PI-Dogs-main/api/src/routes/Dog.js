const { Router } = require('express');

//importo las funciones del controlador 
const {allDogs} = require('../controllers/dogs')

const router = Router();

/*GET /dogs/{idRaza}:
Obtener el detalle de una raza de perro en particular
Debe traer solo los datos pedidos en la ruta de detalle de raza de perro
Incluir los temperamentos asociados*/

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    let dogsTotal = await allDogs();
    let dogId = await dogsTotal.filter(el => el.id == id)
    dogId ?
    res.send(dogId)  :
    res.status(500).send("This Dog doesn't exist")
})


module.exports = router;