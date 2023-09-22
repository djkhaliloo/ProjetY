const express=require('express')
require('dotenv').config()
const connectdb=require('./config/connectDB')
const cors=require('cors')


const app=express()
connectdb()
app.use(cors())
app.use(express.json())
app.use('/user',require('./routes/user'))
app.use('/produit',require('./routes/Produit'))
app.use('/commande',require('./routes/commande'))
app.listen(process.env.PORT,(err)=>err?console.log(err):console.log("server is running"))