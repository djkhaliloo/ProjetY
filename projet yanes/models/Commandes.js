const mongoose=require('mongoose')
const schema=mongoose.Schema

const commandeschema= new schema ({
product:[],
details:[],
serveur:{
    type:String
},
etat:{
    type:String
},
})
const commande=mongoose.model('commande',commandeschema)
module.exports=commande