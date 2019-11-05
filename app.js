const express=require('express')
const bodyParser =require('body-parser')
const Product = require('./models/product')

const app=express()

app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*')

    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Acept, x-auth-token')

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

app.post('/NewProduct', (req, res)=>{
    var product = new Product

    product.name = req.body.name
    product.price = req.body.price
    product.description = req.body.description
    product.category = req.body.category
    
    product.save((err,productStored)=>{
        if(err){
        res.send(`Ocurrio un error guardando el producto: ${err}`)
        }
        res.send({product: productStored})
    })
})
app.get('/backend')
app.get ('/MyProducts', (req, res)=>{
    Product.find({},(err,products)=>{
        if (err){
            res.send(`ocurrio un error: ${err}`)
        }
        if (!products){
            res.send('Ocurrio un error')
        }
        res.send({products})
    })
})

module.exports = app