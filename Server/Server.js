// Versión antigua de importar
// const express = require('express')
// Versión nueva
import express from 'express'
export class Servidor{
    constructor(){
        this.app = express()
        this.enrutarPeticiones()
    }

    despertarServidor(){
        this.app.listen(process.env.PORT, function(){
            console.log(`Servidor encendido ${process.env.PORT}`)
        })
    }

    enrutarPeticiones(){
        this.app.get('/', function (req, res) {
            res.send('Hello World')
          })
    }
}