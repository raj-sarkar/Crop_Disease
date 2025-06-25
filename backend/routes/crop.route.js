import express from 'express'
import { protectRoute } from '../middleware/auth.middleware.js'
import { checkDisease, getLogs } from '../controllers/crop.controller.js'

const router=express.Router()

router.get('/check-disease',protectRoute,checkDisease)
router.get('/logs',protectRoute,getLogs)

export default router