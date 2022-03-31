const mongoose=require('mongoose')

const structureProduct= new mongoose.Schema(
    {
        nombre:{
            type: String
        },
        codigo:{
            type:Number,
            required: true,
            unique: true
        },
        area:{
            type:String
        }
    },
    {
        versionKey:false
    }
)

module.exports= mongoose.model('producto', structureProduct, 'products')