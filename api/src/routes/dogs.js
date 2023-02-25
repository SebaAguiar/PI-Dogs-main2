const { Router } = require('express');
const getDogsApi = require('../controlers/getDogsApi');
const getDogsById = require('../controlers/getDogsById');
const HTTP_STATUS = require('../utils/HTTP-status');
const router = Router()

// localhost:3001/dogs?name='perrito'

router.get('/', async(req, res) => {
    try {
        const { name } = req.query
        const data = await getDogsApi()  // 
        if(name) {
            let found = data.filter(e => e?.name?.toLowerCase().includes(name?.toLowerCase()))
            found.length 
            ? res.status(200).send(found)
            : res.status(404).send('perrito no encontrado')
        } else {
            res.status(200).send(data)
        }
    } catch (error) {
        console.log('ERROR EN GET DOGS')
        console.log(error)
        console.log('ERROR EN GET DOGS')
        res.status(400).send('error en el servidor')
    }
})

// localhost:3001/dogs/id


router.get('/:id', async(req, res) => {
    const { id } = req.params
    try {
        const dog = await getDogsById(id)
        dog.length
        ? res.status(200).send(dog)
        : res.status(404).send('perrito no encontrado')
    } catch (error) {
        console.log('ERROR EN GET DOGS ID')
        console.log(error)
        console.log('ERROR EN GET DOGS ID')
        res.status(400).send('error en el servidor')
    }
})

// router.post()




module.exports = router

