import express from 'express'
import path from 'path'
// import bodyParser from 'body-parser'

const app = express()

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join('frontend')))

app.get('/', (resquest, response) => {
    console.log('')
    console.log('> Recived a request')
    console.log('')
    response.sendFile('C:/Users/kulka/Documents/GitHub/Calculadora/frontend/calculadora.html')
})

app.get('/calculo', (request, response) => {
    console.log('> Recived a requisition of calculation')
    const operation = (request.headers.operation).split(",")
    const numbers = (request.headers.operators).split(",")

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i].includes('.')) { numbers[i] = parseFloat(numbers[i]) }
        else { numbers[i] = parseInt(numbers[i]) }
    }

    const resultado = resolve(numbers, operation)
    response.json({status: 200, numbers: resultado})
})

app.listen(2, console.log('> Ouvindo na porta 2'))



function resolve(number, operation) {
    let less
    if (operation.includes('*') || operation.includes('/')) {
        less = 0
        for (let i = 0; i < operation.length; i++) {
            if (operation[i] == '*') {
                number[i - less] = number[i - less] * number[i + 1 - less]
                let numero = i + 1 - less
                number.splice(numero, 1)
                less ++
            }
            if (operation[i] == '/') {
                number[i - less] = number[i - less] / number[i + 1 - less]
                let numero = i + 1 - less
                number.splice(numero, 1)
                less ++
            }
        }
        less = 0
        for (let i = 0; i < operation.length; i++) {
            if (operation[i-less] == '*' || operation[i-less] == '/') {
                operation.splice(i-less, 1)
                less++
            }
        }
    }

    if (operation.includes('+') || operation.includes('-')) {
        less = 0
        for (let i = 0; i < operation.length; i++) {
            if (operation[i] == '+') {
                number[i - less] = number[i - less] + number[i + 1 - less]
                let numero = i + 1 - less
                number.splice(numero, 1)
                less ++
            }
            if (operation[i] == '-') {
                number[i - less] = number[i - less] - number[i + 1 - less]
                let numero = i + 1 - less
                number.splice(numero, 1)
                less ++
            }
        }
        less = 0
        for (let i = 0; i < operation.length; i++) {
            if (operation[i-less] == '+' || operation[i-less] == '-') {
                operation.splice(i-less, 1)
                less++
            }
        }
    }

    return number[0]
}