import Router from "express";
const User = require("../models/User")
bcrypt = require("bcryptjs")

const router = new Router()

router.post('/registration', async (req, res) => {
   try {
      
      const {login, password} = req.body

      const candidate = User.findOne({login})

      if (candidate){
         return res.status(400).json({message: `User with email ${email} already exist`})
      } else{

         const hashPassword = await bcrypt.hash(password, 15)
         const user = new User({login, password: hashPassword})
         await user.safe()
         return res.json({message: 'User was created'})

      }
   } catch (e) {
      console.log(e)
      res.send({message: 'Server error!'})
   }
})