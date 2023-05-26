const User=require('../models/userschema')


exports.userdata=async(req,res)=>{
    const {name,mobile,psw}=req.body

    try{

        const data=await User.findOne({name})
        if(data){
            res.status(401).json("user already exists")
        }
        else{
            const newdata=await new User({
                name,mobile,psw
            })
            await newdata.save()
            res.status(200).json('user added successfully')
        }

    }
    catch(error){
        res.status(404).json(error)
    }
}