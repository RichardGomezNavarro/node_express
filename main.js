const express=require('express')
const ruta = require('./app/rutas/user')
const db=require('./config/db')

const app=express()
const port=4000
const hostname='172.0.0.1'

app.use(
    express.json({
        limit: '20mb'
    })
)

app.use(
    express.urlencoded({
        limit: '20mb'
    })
)

app.use(ruta)
app.get('/',(req,res)=>{
    res.send('Hola a todos, los saludo desde el main.js')
})


app.listen(port,()=>{
    console.log(`Hola a todos, los escucho por aquí: ${hostname}:${port}`)
})

db()