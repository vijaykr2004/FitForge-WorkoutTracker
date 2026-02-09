const express=require('express')
const {signupUser,loginUser}=require('../Controller/userController.js')


const router=express.Router()

// Login routes
router.post("/login",loginUser)

// signup routes
router.post("/signup",signupUser)

module.exports=router