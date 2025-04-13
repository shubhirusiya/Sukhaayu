import express, { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import { authenticate } from '../middleware/authenticate.middleware.js';
import { Signup } from '../controllers/Signup.controllers.js';
import { generateAccessToken } from '../UTILS/generateAccessTokens.utils.js';

















export const router = express.Router();
const saltRounds=10;



router.post('/signup',async(req,res)=>{
    console.log("signup called")
    const {name,email,password,phoneNumber,role,address}= req.body;

   

    

    const existingUser = await User.findOne({email});

    if(existingUser)
    {
        return res.status(400).json({message:'User already exists'})
    }

    const hashedPassword = await bcrypt.hash(password,saltRounds);
    
  
    
    



   
   


    try{

        
      
        

        await Signup(name,email,hashedPassword,phoneNumber,role,address);
        res.status(201).json({message: 'User created'});
     }
     catch(e)
    {
        res.status(410).json({error: e.message});

    }

})

router.post('/login', async(req, res)=>{
    console.log("login called")
    const {email,password}= req.body;
   

    try{

        const user = await FindUser(email);

        if(!user)
        {
            return res.status(404).json({message: 'User not found'});
        }

        const isMatched = await bcrypt.compare(password, user.password);

        if(!isMatched)
        {
            return res.status(401).json({message: 'Incorrect password'});
        }


        const accessToken= await generateAccessToken(user._id);
       

        const options={
            httpOnly:true,
            secure:false,
            sameSite:"Lax",
            maxAge: 24 * 60 * 60 * 1000,
         
           
        }

        res.status(200).cookie("accessToken",accessToken,options).json({message:"login success"})

    }
    catch(e)
    {
        res.status(500).json({error: e.message});
    }
  })

