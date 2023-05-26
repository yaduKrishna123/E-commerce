require('dotenv').config()
require('./db/connection')
const express=require('express')
const cors=require('cors')
const router=require('./router/router')

const server=express()

server.use(cors())
server.use(express.json())
server.use(router)


const PORT=process.env.PORT || 4000

server.listen(PORT,()=>{
    console.log(`Ecom serer iistening to port number ${PORT}`);
})