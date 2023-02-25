const axios = require('axios')
const { Dog, Temperament } = require('../db.js')
const getDogsApi = require('./getDogsApi')

const getDogsById = async(id) => {
    try {
        if(id.match(/^[a-f0-9]{8}-?[a-f0-9]{4}-?4[a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12}$/i)) {
            let dbDog = await Dog.findByPk(id, {
                include: [{
                    model: Temperament,
                    attributes: 'name',
                    through: {
                        attributes: []
                    }
                }]
            })
            return dbDog
        } else {
            const apiDogs = await getDogsApi()   
            return apiDogs?.filter(e => e.id == id)
        }
    } catch (error) {
        console.log('ERROR EN getDogsbyId()')
        console.log(error)
        console.log('ERROR EN getDogsbyId()')
    }
}

module.exports = getDogsById