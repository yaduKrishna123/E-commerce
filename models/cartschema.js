const mongoose=require('mongoose')

const cartschema=mongoose.Schema({
    category: {
        type: String,
        required: true
      },
    name:{
        required:true,
        type:String
    },
    image:{
        required:true,
        type:String
    },
    price:{
        required:true,
        type:Number
    },
    stock:{
        required:true,
        type:Number
    }
})

const cart  =mongoose.model("cart",cartschema)

module.exports=cart