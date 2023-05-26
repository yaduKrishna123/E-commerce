const cart=require('../models/cartschema')
const product=require('../models/products')
const wishlist=require('../models/wishlist')


exports.wishAddtocart=async(req,res)=>{
    const {category,name,image,price}=req.body
const stock=1
try{

    const productdata=await product.findOne({name})

    if(productdata){
        // if(productdata.stock>0){



        // }

        const cartdata=await cart.findOne({name})
        if(cartdata){
            if(cartdata.stock>0){
                cartdata.stock+=1
                cartdata.price+=cartdata.price
                 productdata.stock-=1
                await cartdata.save()
                await productdata.save()
                const deletedata=await wishlist.deleteOne({name})
                const wishdata=await wishlist.find()
                res.status(200).json(wishdata)
               
            }


        }
        else{
            const newcartdata=await new cart({
                category,name,image,price,stock

            })
            await newcartdata.save()
            productdata.stock-=1
            productdata.save()
            const del=await wishlist.deleteOne({name})
       
            const alldata=await wishlist.find()
            res.status(200).json(alldata)
        }



    }
    else{
        res.status(401).json("data not found on products")
    }

}
catch(error){
    res.status.json(error)
}
}