const mongoose=require('mongoose')


const userschema=mongoose.Schema({
    name:{
        required:true,
        type:String,
        unique:true
    }
    ,mobile:{
        required:true,
        type:Number
    },
    psw:{
        required:true,
        type:String
    }
})

const users=mongoose.model("users",userschema)

module.exports=users