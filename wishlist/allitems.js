const item=require('../models/wishlist')



exports.getallwishlists=async(req,res)=>{
    try{
        const data=await item.find()
        if(data){
            res.status(200).json(data)
        }
        else{
            res.status(404).json('Your Wish List is Empty')
        }

    }
    catch(error){
        res.status.json(error)
    }
}


exports.Deleteiteminwishlist=async(req,res)=>{
    const {id}=req.params
    try{
        const deleteid=await item.deleteOne({_id:id})
       
        if(deleteid){
            
            const alldata=await item.find()
            res.status(200).json(alldata)
          
        }
        else{
            res.status(401).json('data does not exist')
        }
        

    }
    catch(error){
        res.status(401).json(error)
    }
}


exports.deleteallwishlist=async(req,res)=>{
  try{
    const allitem=await item.find()
    if(allitem.length>0){
        const deleteall=await item.deleteMany()
        const Data=await item.find()
        res.status(200).json(Data)
    }
    else{
        res.status(401).json('not found')
    }
  }
  catch(error){
    res.status(401).json(error)
  }
}