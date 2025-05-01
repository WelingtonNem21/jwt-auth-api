import { Router, Request, Response } from 'express'
import { CreateController } from './controllers/user/createController'
import { AuthController } from './controllers/user/AuthController'
import { GetUserController } from './controllers/user/getUserController'
import { verifyToken } from './helpers/verifyToken'

const routes = Router()

routes.post('/create', new CreateController().handle)


routes.post('/login', new AuthController().handle)


routes.get('/list', verifyToken, new GetUserController().handle)


export default routes