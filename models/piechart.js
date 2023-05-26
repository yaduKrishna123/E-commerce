const mongoose=require('mongoose')


const pieschema=mongoose.Schema({
    category:{
        unique:true,
        required:true,
        type:String
    },
    count:{
        required:true,
        type:Number
    }
})

const piedatas=mongoose.model("piedatas",pieschema)
module.exports=piedatas