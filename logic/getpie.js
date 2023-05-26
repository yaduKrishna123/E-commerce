const data=require('../models/piechart')

exports.getpie=async(req,res)=>{

        try{
            const items=await data.find()

            if(items){
                res.status(200).json(items)

            }
            else{
                res.status(404).json('data not found')
            }

        

        }
        catch(error){
            res.status(401).json(error)

        }


}