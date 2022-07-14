import express from 'express'

const app = express()

app.get('/', (resquest, response) => {
    console.log('> Recived a request')
    response.send('ok')
})

app.listen(2, console.log('> Ouvindo na porta 2'))