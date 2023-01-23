const express=require('express')
const { userSignupCtrl } = require('../../controller/user/userControllers')
const { validateRequestSchema } = require('../../middlewares/expressValidation/expressValidation')
const { registerSchema } = require('../../middlewares/expressValidation/userSchema')

const userRouter=express.Router()




userRouter.post('/',registerSchema,validateRequestSchema,userSignupCtrl)


module.exports=userRouter
