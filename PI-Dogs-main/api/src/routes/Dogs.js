const { Router } = require('express');

//importo las funciones del controlador 
const {allDogs} = require('../controllers/dogs')

const router = Router();


/* GET /dogs:
Obtener un listado de las razas de perro
Debe devolver solo los datos necesarios para la ruta principal
GET /dogs?name="...":
Obtener un listado de las razas de perro que contengan la palabra ingresada como query parameter
Si no existe ninguna raza de perro mostrar un mensaje adecuado*/

router.get('/dogs', async (req, res) => {
    const name = req.query.name;
    let dogsTotal = await allDogs();
   if(name){
    let dogName = await dogsTotal.filter(el => el.name.toLowerCase().includes(name.toLowerCase()));
    dogName ?
    res.send(dogName)  :
    res.status(404).send("This Dog doesn't exist")
   } else {
    res.send(dogsTotal) 
   }
})



module.exports = router;