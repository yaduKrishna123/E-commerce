const data=require('../models/products')



exports.allData=async(req,res)=>{
    const search=req.query.search
    const query={
        name:{$regex:search,$options:"i"}
    }
    try{
        const products=await data.find(query)
        if(products){
            res.status(200).json(products)
        }
        else{
            res.status(401).json('no data found')
        }

    }
    catch(error){
        res.status(401).json(error)

    }
}