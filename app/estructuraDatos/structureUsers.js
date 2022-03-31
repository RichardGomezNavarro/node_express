const mongoose = require('mongoose')

const structureUse = new mongoose.Schema(
    {
        nombre:{
            type:String
        },
        email:{
            type:String,
            unique:true,
            required:true
        }
    },
    {
        versionKey:false,
        timestamps:true
    }
)

module.exports=mongoose.model('user',structureUse, 'main')