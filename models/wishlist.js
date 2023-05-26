const mongoose=require('mongoose')


const wishlistschema=mongoose.Schema({


  category: {
    type: String,
    required: true
  },
    
    name: {
     
        type: String,
        required: true,
        
      },
      image: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      stock: {
        type: Number,
        required: true
      }
})
const wishlists=mongoose.model("wishlists",wishlistschema)

module.exports=wishlists