import { generateToken } from "../lib/utils.js"
import User from "../models/user.model.js"
import bcrypt from 'bcrypt'


export const signup = async (req, res) => {
    const { fullName, email, password } = req.body
    try {
        if (!fullName || !email || !password) {
            return res.status(400).json({ message: 'Please provide all credentials' })
        }
        if (password < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters" })
        }
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: 'User with this email already exist' })
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const newuser = new User({ fullName, email, password: hashedPassword })
        if (newuser) {
            generateToken(newuser._id, res)
            await newuser.save()

            res.status(201).json({
                _id: newuser._id,
                fullName: newuser.fullName,
                email: newuser.email
            })
        }
        else {
            res.status(400).json({ message: 'Invalid user data' })
        }
    } catch (err) {
        console.log('Error in signup controller', err.message)
        res.status(500).json({ message: 'Internal server Error' })
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body
    try {
        if (!email || !password) {
            return res.status(400).json({ message: 'Please provide all credentials' })
        }
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: 'No user found with this email' })
        }
        const passwordMatched = await bcrypt.compare(password, user.password)
        if (!passwordMatched) {
            return res.status(400).jso({ message: 'Invalid credentials' })
        }
        else {
            generateToken(user._id,res)
            res.status(200).json({
                _id:user._id,
                fullName: user.fullName,
                email: user.email
            })
        }
    } catch (err) {
        console.log('Error login controller',err.message)
        res.status(500).json({message:'Internal server error'})
    }
}

export const logout = async (req, res) => {
    try {
        res.cookie('jwt','',{maxAge:0})
        res.json({ message: "logout successfully" })
    } catch (err) {
        console.log('Error in logout controller',err.message)
        res.status(500).json({message:'Internal server error'})
    }
}

export const check=async(req,res)=>{
    try {
        res.status(200).json({user:req.user})
    } catch (err) {
        console.log('Error in check controller',err.message)
        return res.status(500).json({message:'Internal server error'})
    }
}