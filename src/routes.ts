import { Router, Request, Response } from 'express'
import { CreateController } from './controllers/user/createController'

const routes = Router()

routes.post('/login', new CreateController().handle)


export default routes