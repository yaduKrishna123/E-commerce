const view=require('../models/cartschema')


exports.cartview=async(req,res)=>{



    try{
        const data=await view.find()


        if(data){
            res.status(200).json(data)


        }
        else{
            res.status(401).json('data not found')
        }
        

    }
    catch(error){
        res.status(401).json(error)

    }
}