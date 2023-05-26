const mongoose=require('mongoose')


const userschema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    psw:{
        type:String,
        required:true
    },
    cpsw:{
        type:String,
        required:true
    }
})
const adminusers=mongoose.model("adminusers",userschema)

module.exports=adminusers