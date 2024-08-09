import { Router } from 'express'
import UserController from '#controllers/users.controller.js'

const router = Router()

router.post('/', UserController.createUser)
router.put('/:id', UserController.updateUser)

export default router