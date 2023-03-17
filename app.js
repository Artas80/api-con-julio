const express = require('express')
const estadoEquipo = require('./modelos/estadoEquipo')
const estadoEquipo = require('./modelos/inventarios')
const estadoEquipo = require('./modelos/marcas')
const estadoEquipo = require('./modelos/modulosUsuarios')
const estadoEquipo = require('./modelos/tipoEquipos')
const app = express()


// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))


const tipoEquipo = require('./routes/tipoEquipo')
const usuario = require('./routes/tipoEquipo')
const Marca = require('./routes/tipoEquipo')
const Inventario = require('./routes/tipoEquipo')
const estadoEquipo = require('./routes/tipoEquipo')

app.use('/api/tiposequipos', tipoEquipo)
app.use('/api/usuario', usuario)
app.use('/api/marca', Marca)
app.use('/api/inventario', Inventario)
app.use('/api/estadoequipo', estadoEquipo)


module.exports = app
