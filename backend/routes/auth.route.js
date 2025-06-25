import express from 'express'
import {login,signup,logout,check} from "../controllers/auth.controller.js"
import { protectRoute } from '../middleware/auth.middleware.js'

const router=express.Router()

router.post('/signup',signup)
router.post("/login",login)
router.post('/logout',logout)
router.get('/check',protectRoute,check)

export default router