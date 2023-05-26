const cart=require('../models/cartschema')
const products=require('../models/products')


exports.plusdata=async(req,res)=>{
    const {name}=req.body
    try{
        const data=await products.findOne({name})
        if(data){
            const cartdata=await cart.findOne({name})
            if(cartdata){

                if(data.stock>0){
                    cartdata.stock+=1
                    cartdata.price+=data.price
                    await  cartdata.save()
                    

                    data.stock-=1
                  await  data.save()
                 
                  const alldata=await cart.find()
                  res.status(200).json(alldata)

                }
                else{
                    res.status(401).json('out of stock')
                }


            }
            else{
                res.status(401).json('cart data error')
            }

        }
        else{
            res.status(401).json('data not Found')
        }

    }
    catch(error){
        res.status(401).json(error)
    }
}


exports.minusdata=async(req,res)=>{
    const {name,price}=req.body
    const stock=1
    try{

        const pdata=await products.findOne({name})

        if(pdata){

            const cdata=await cart.findOne({name})

            if(cdata){

                

                    if(cdata.stock==1){
                        pdata.stock+=1
                        await pdata.save()
                        const del=await cart.deleteOne({name})
                        const alldata=await cart.find()
                        res.status(200).json(alldata)
                    }
                    else{
                        
                    pdata.stock+=1
                    await pdata.save()

                    cdata.stock-=1
                    cdata.price-=pdata.price
                    
                    
                   await cdata.save()
                   const Alldata=await cart.find()
                    res.status(200).json(Alldata)


                    }



                
               
            }
            else{
                res.status(401).json('data not found')
            }

        }
        else{
            res.status(401).json('error data')
        }

    }
    catch(error){
        res.status(401).json(error)
    }
}