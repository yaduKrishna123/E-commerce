const data=require('../models/wishlist')
const productdata=require('../models/products')



exports.wishlist=async (req,res)=>{
    const {category,name,image,price,stock}=req.body

    try{
        const wdata=await data.findOne({name})
        if(wdata){
            res.status(401).json("item already in Wishlist")
        }
        else{  

            const pdata=await productdata.findOne({name})

            if(pdata.stock>0){
                const newdata=await new data({
                    category,name,image,price,stock
                })
                await newdata.save()
                res.status(200).json(newdata)

            }
            else{
                res.status(404).json({ message: 'out of stock', error: { message: customErrorMessage } })
            }
           
        }

    }
    catch(error){
        res.status(401).json(error)
    }
}