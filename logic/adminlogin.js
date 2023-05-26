const user=require('../models/adminregister')

const jswt=require('jsonwebtoken')

exports.adminlogin=async (req,res)=>{
    const {email,psw}=req.body
    try{
        const data=await user.findOne({email,psw})
        if(data){
            const token=jswt.sign({
                loginemail:email
            },"super")
            res.status(200).json({data:data,token:token})
        }
        else{
            res.status(401).json("user not found in the data base")
        }


    }
    catch(error){
        res.status(401).json(error)
    }
}