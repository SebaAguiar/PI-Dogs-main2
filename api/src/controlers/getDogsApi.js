const axios = require('axios')

const getDogsApi = async() => {
   try {
    const dogs = await axios.get('https://api.thedogapi.com/v1/breeds')
    // dogs: {
    //     data: [
    //         {perro1 perro2}
    //     ]
    // }
    const data = dogs.data.map(e => (
        {
            id: e.id,
            name: e.name,
            image: e.image.url,
            temperaments: e.temperaments,
            weight: e.weight.metric,
            height: e.height.metric,
            life_span: e.life_span
        }
    )
    )
    return data
   } catch (error) {
       console.log("ERROR EN getDogsApi()")
       console.log(error)
       console.log("ERROR EN getDogsApi()")
}
}


// HOLA COMO ESTAS?

module.exports = getDogsApi
