const product=require('../models/products')



exports.addproducts=async(req,res)=>{
    const {category,name,image,price,stock}=req.body
    try{
        const item=await product.findOne({name})
        if(item){
           item.stock+=1
           await item.save()
            res.status(200).json(item)
        }
        else{
            const newitem=await product.create({
                category,name,image,price,stock

            })
            await newitem.save()
            res.status(200).json(newitem)
        }

    }
    catch(error){
        res.status(401).json(error)
    }
}

