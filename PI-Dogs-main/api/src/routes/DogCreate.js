const { Router } = require('express');

//importo los modelos de la db 
const {Dog, Temperament} = require('../db')



const router = Router();

router.post('/', async (req, res) => {
    let {
        temperament,
        name,
        image,
        weight,
        height,
        life_span,
        createdInDb
    } = req.body;

    if(!name || !weight || !height){
        return res.status(500).send("Faltan datos para la creación")
    } else {

        let dogCreated = await Dog.create({
            name,
            image,
            weight,
            height,
            life_span,
            createdInDb,
        })
        let TempDb = await Temperament.findAll({
            where: {
                name: temperament
            }
        })
        dogCreated.addTemperament(TempDb)
        res.send('Creación exitosa');
    }
})

module.exports = router;
