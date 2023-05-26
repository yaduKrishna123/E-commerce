const express=require('express')
const admin=require('../logic/adminReg')
const login=require('../logic/adminlogin')
const pro=require('../prductlogic/addproducts')

const allproduct=require('../logic/allproducts')
const viewpro=require('../logic/viewproduct')

// wishlist
const Addwishlist=require('../wishlist/wishlistlogic')
const Getallwishlistdata=require('../wishlist/allitems')
// cart
const cart=require('../cart/cartlogic')
const cartview=require('../cart/cartview')
const delcartitem=require('../cart/deletecart')
const incrementitem=require('../cart/plus')
const wishlistToCart=require('../cart/wishlisttocart')

const adduser=require('../userlogic/userregister')
const finduser=require('../userlogic/userlogin')

const pieLogic=require('../logic/pielogic')
const getallpie=require('../logic/getpie')

const jwt=require('jsonwebtoken')


const router = express.Router()

const jwtmiddleware=(req,res,next)=>{
    const token=req.headers['varify']
    try{
        const data=jwt.verify(token,"super")
        next()

    }
    catch{
        res.status(200).json({message:'please login'})
    }
  
}

router.post('/register',admin.adduser)
router.post('/login',login.adminlogin)

router.post('/addproducts',pro.addproducts)
router.get('/allproducts',allproduct.allData)
router.get('/viewdata/:id',viewpro.viewproducts)
router.post('/addtowishlist',Addwishlist.wishlist)
router.get('/getallwishlistdata',Getallwishlistdata.getallwishlists)
router.delete('/deleteitem/:id',Getallwishlistdata.Deleteiteminwishlist)
router.delete('/deleteall',Getallwishlistdata.deleteallwishlist)
// cart
router.post('/Addtocart',cart.addtocart)

router.get('/viewalldata',cartview.cartview)
router.delete('/deletecartitem/:id',delcartitem.removecartitem)
router.delete('/deletecartdata',delcartitem.deleteallcart)
router.put('/increment',incrementitem.plusdata)
router.post('/addtowishlisttocart',wishlistToCart.wishAddtocart)
router.put('/decrement',incrementitem.minusdata)
router.delete('/emptycart',delcartitem.paymentdeletecart)
router.post('/addusers',adduser.userdata)
router.post('/userlogin',finduser.LoginUser)

router.post('/pielogics',pieLogic.piechart)
router.get('/getpiedata',getallpie.getpie)
module.exports=router