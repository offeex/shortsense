import { Router } from 'express'
import homeController from '../controllers/home.controller';

const router = Router()

router.post('/shorten', homeController.create)
router.get('/:key', homeController.read)

export default router
