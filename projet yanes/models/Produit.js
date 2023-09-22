const mongoose=require('mongoose')
const schema=mongoose.Schema

const produitschema= new schema ({

    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    photo:{
        type:String,
    },
})
const produit=mongoose.model('produit',produitschema)
module.exports=produit