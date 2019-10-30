const express=require('express')
const bodyParser =require('body-parser')
const app=express()

app.use((req, res, next)=>{
    res.header('Acces-Control-Allow-Origin', '*')

    res.header('Acces-Control-Allow-Headers', 'Origin, X-Requested- with, Content-Type, Acept, x-auth-token')

    res.header('Access-Control-Expose-Headers', 'x-auth-token')
    next()
})
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/',(req, res)=>{
    res.send('Entraste a /')
})
app.get('/soledad',(req, res)=>{
    res.send('Soy soledad')
})

app.post('/nombre', (req, res)=>{
    var name = req.body.name
    res.send ('Hola ' + name + 'un gusto conocerte')
}) 
app.get('/backend')

module.exports = app