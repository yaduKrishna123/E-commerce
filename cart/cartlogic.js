const Cart=require('../models/cartschema')

const product=require('../models/products')




exports.addtocart=async(req,res)=>{
    const {category,name,image,price}=req.body
    const stock=1

    try{
        const data=await product.findOne({name})
        if(data.stock>0){
            const dataitem=data.name

            const pdata=await Cart.findOne({name})

            if(pdata){
               if(data.stock>0){
                data.stock-=1
                await data.save()
                pdata.stock+=1
                pdata.price+=price
                await pdata.save()
                res.status(200).json(data)
               }
               else{
                res.status(401).json("out of stock")
               }
            }
            else{
            
                const newdata=await new Cart({
                    category,name,image,price,stock
                })
                
                await newdata.save()
                data.stock-=1
               await data.save()
                const AllData=await product.find()
                
                res.status(200).json(AllData)
            }



    

        }
        else{
            res.status(401).json("out of stock")
        }
       

    }
    catch(error){
        res.status(401).json(error)

    }
}