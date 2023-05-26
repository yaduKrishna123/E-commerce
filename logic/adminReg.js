const user=require('../models/adminregister')


exports.adduser=async(req,res)=>{
    const {username,image,email,psw,cpsw}=req.body

    try{
        const admin=await user.findOne({email})
        if(admin){
            res.status(401).json('user already exist pease register')
        }
        else{
            const newadmin=await new user({username,image,email,psw,cpsw})
            res.status(200).json("you are now an admin please login to expolore")
            await newadmin.save()
        }
    


    }
    catch(error){
        res.status(401).json(error)
    }
}