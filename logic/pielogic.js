const chart=require('../models/piechart')
const cart=require('../models/cartschema')


exports.piechart=async(req,res)=>{
    const {category}=req.body
    const count =1
    try{

        const allcart=await cart.find()
        if(allcart){


           

                
                const data=await chart.findOne({category})

                if(data){
                    // const counts=item.count
                          data.count+=1
                    await data.save()
                    res.status(200).json(data)

                }
                else{
                    const newdata=await new chart({
                        category,count
                    })
                    await newdata.save()
                    res.status(200).json(newdata)

                }


            
  

            

              

        }
        else{
            res.status(40).json('ites not found')
        }

    }
    catch(error){
        res.status(401).json(error)
    }
}