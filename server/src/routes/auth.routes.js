import { Router } from 'express'
import AuthController from '#controllers/auth.controller.js'
import { validateToken } from '#middlewares/validateToken.js'

const router = Router()

router.post('/login', AuthController.loginUser)
router.get('/renew', validateToken, AuthController.renewToken)

export default router