const { insertMany } = require('../estructuraDatos/structureUsers')
const structureUser=require('../estructuraDatos/structureUsers')
const structureProduct = require('../estructuraDatos/structureProducts')
const mongoose=require('mongoose')

exports.getData=(req,res)=>{
    structureUser.find({},(error,docs)=>{
        res.send({docs})
    })
}

exports.insertData = (req,res)=>{
    const data=req.body
    //res.send({data})
    structureUser.create(data,(err,docs)=>{
        if(err) {
            console.log('error',err)
            res.send({error: err },404)
        }else{
            res.send({data:docs})
        }   
    })
}

exports.insertProduct=(req,res)=>{
    const data=req.body
    //res.send({data})
    structureProduct.create(data,(err,docs)=>{
        if(err){
            console.log('error'+err)
            res.send({error:err},305)
        }else{
            res.send({data:docs})
        }
    })
}

const parserId=(id)=>{
    return mongoose.Types.ObjectId(id)
}

exports.updateSingle=(req,res)=>{
    const {id} = req.params
    const body=req.body
    structureUser.updateOne(
        {_id: parserId(id) },
        body,
        (err,docs)=>{
            res.send(
                {
                    items:docs
                })
        }
    )
}

//Eliminar
exports.delete_u=(req,res)=>{
    const {id} = req.params
    structureUser.deleteOne(
        {_id: parserId(id) },
        (err,docs)=>{
            res.send(
                {
                    items:docs
                })
        }
    )
}