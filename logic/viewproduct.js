const product=require('../models/products')


exports.viewproducts = async (req,res)=>{
    const {id}= req.params


    try{
        const udata=await product.findOne({_id:id})

        if(udata){

            res.status(200).json(udata)
            
        }
        else{
            res.status(401).json('data not found')
        }

    }
    catch(error){
        res.status(401).json(error)
    }


}