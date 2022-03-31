const express=require('express')
const controlador=require('../enrutadores/dato')
const ruta=express.Router()
const path='user'
const path2='products'

ruta.get(
    '/user',controlador.getData
)

ruta.get('/', (req,res)=>{
    res.send('Hola a todos, saludos desde el user.js')
})

ruta.post(`/${path}`,controlador.insertData)

ruta.post(`/${path2}`,controlador.insertProduct)

//Actualizaciones
ruta.put(`/${path}/:id`,controlador.updateSingle)
//eliminaciones
ruta.delete(`/${path}/:id`,controlador.delete_u)

module.exports=ruta