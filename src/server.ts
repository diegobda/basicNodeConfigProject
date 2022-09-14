import express from 'express'

const app = express()


// localhost:3334/ads


app.get('/ads', (request, response) => {

    return response.json([
        
        {id: 1, name: 'Anuncio 1'},
        {id: 2, name: 'Anuncio 2'},
        {id: 2, name: 'Anuncio 2'},

    ])
})


app.listen(3334)