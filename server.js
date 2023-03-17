const express = require('express')
const app = express()

app.get('/helle',(req,res)=>{//req= resive el resultado ,res=manda la respuesta
res.json({'saludo':'respuesta'})
})

app.listen(3000,()=>{
    console.log('arranco el servidor por el puerto 3000')
})