'use strict'
const express=require('express')

const app=express()
var port=8080

app.get('/',(req,res)=>{
    res.send('Entraste a /')
})
app.get('/soledad',(req,res)=>{
    res.send('Soy soledad')
})

app.listen(port, () =>{
    console.log('felicidades tu aplicacion esta corriendo en: http://localhost:8080')
})
