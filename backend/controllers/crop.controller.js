import User from "../models/user.model.js"
import cloudinary from '../lib/cloudinary.js'

export const checkDisease=async(req,res)=>{
    try{
    const {image}=req.body
    if(!image)
        return res.status(400).json({message:'Please provide an image'})
    const imageUrl=await cloudinary.uploader.upload(image)
    /*
        to-do later ai-model integration
    const url=''
    const response=await fetch(url,imgUrl)
    */
   const response="This is disease response"
    await User.updateOne(
        {_id:req.user._id},
        {$push : {logs:{image:imageUrl,desc:response}}}
    )
    res.status(200).json({data:response})
    }
    catch(err){
        console.log("Error in check-Disease controller",err.message)
        return res.status(500).json({message:'Internal server error'})
    }
}

export const getLogs=async(req,res)=>{
    try{
        const data=await User.findById(req.user._id).select('logs')
        res.status(200).json({data})
    }catch(err){
        console.log('Error in get logs controller',err.message)
        res.status(500).json({message:"Internal server error"})
    }

}