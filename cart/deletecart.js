const cart=require('../models/cartschema')
const products=require('../models/products')


exports.removecartitem=async(req,res)=>{
    const {id} =req.params

    try{
        const data=await cart.findOne({_id:id})
        const Name=data.name

        if(data){
            console.log(Name);
            const pdata=await products.findOne({name:Name})


            if(pdata){

                
                    
                    const del=await cart.deleteOne({_id:id})


                    pdata.stock +=data.stock
                   
                    await pdata.save()
                    // data.stock-=1
                    // await data.save()
                    const Alldata=await cart.find()

                    res.status(200).json(Alldata)

               
                
            }
            else{
                res.status(401).json('out of stock')
            }


          
        }
        else{
            res.status(401).json('datanot found')
        }

    }
    catch(error){
        res.status(401).json(error)
    }

    
}


// exports.deleteallcart=async(req,res)=>{

//     try{
//         const alldata=await cart.find()
//         if(alldata.length>0){
//             const Products=await products.find()
//             products.stock+=cart.stock
            
//             const remove=await cart.deleteMany()
//             const Data=await cart.find()
//             res.status(200).json(Data)
//         }
//         else{
//             res.status(401).json('no data found')
//         }
     

//     }
//     catch(error){
//         res.status(401).json(error)
//     }
// }
exports.deleteallcart = async (req, res) => {

    
    try {
      const cartItems = await cart.find();
  
  
  if(cartItems){
    for (const cartItem of cartItems) {
        const productId = cartItem.name;
        const stocks = cartItem.stock;
  
        const product = await products.findOne({name:productId});
        if (!product) {
          continue; // Skip if product not found
        }
  
        product.stock += stocks;
        await product.save();
      }
  
      await cart.deleteMany();
  
      res.status(200).json({ message: 'Stock moved to products successfully' });
    }
    else{
        res.status(400).json('not found')
    }
    
  }
      catch (error) {
      res.status(500).json({ error: 'An error occurred while moving stock to products' });
    }
  };


  exports.paymentdeletecart=async(req,res)=>{
    try{
      const emptycart=await cart.find()

      if(emptycart){

        // for(const cartitems of emptycart){
        //   const productname=cartitems.name

        //   const stocks=cartitems.stock

        //   const pdata=await products.findOne({name:productname})

        //   if(pdata){

       
        //   }



        // }
        await cart.deleteMany()
        res.status(200).json('success')

      }
      else{
        res.status(401).json('not found')
      }
      
    }
    catch(error){
      res.status(401).json(error)
    }
  }