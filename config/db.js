const mongoose=require('mongoose')

const url_mongodb='mongodb://127.0.0.1:27017/my_dataBase'


module.exports=()=>{

    const conexion=()=>{

        mongoose.connect(
            url_mongodb,
            {
                keepAlive:true,
                useNewUrlparser:true,
                useUnifiedTopology:true
            },
            (error)=>{
                if(error){
                    console.log('Existe un error en la conexión'+error)
                }else{
                    console.log('Conexión exitosa')
                }
            }
        )
    }
    conexion()
}