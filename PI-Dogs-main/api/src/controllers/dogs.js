const axios = require('axios');
require('dotenv').config();
const {myApiKey} = process.env;
const {Dog, Temperament} = require('../db')



const getApiInfo = async()=> {
    const apiUrl = await axios.get(`https://api.thedogapi.com/v1/breeds?${myApiKey}`)
    const allData = await Promise.all(apiUrl.data)
    const dogsData = allData.map(el => {
        return{
            id: el.id,
            name: el.name,
            image: el.image.url,
            weight: el.weight.metric,
            height: el.height.metric,
            life_span: el.life_span,
            temperament: el.temperament,
        }
    })
    return dogsData
}


const getDbInfo= async()=> {
    return await Dog.findAll({
        include: {
            model: Temperament,
            attributes: ['name'], 
            through:{
                attributes: []
            }
        }
    })
}

// concateno las dos infos db y api
const allDogs = async()=> {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const allInfo = [...dbInfo, ...apiInfo]; // concateno la info de las funciones anteriores.
    return allInfo;
}


module.exports = {allDogs, getApiInfo} ;