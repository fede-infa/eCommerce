import {Router} from 'express'
const router = Router()

import { signIn, signUp } from '../controllers/user'

export = (router) =>{
    router.post('/signup', signUp)
    router.post('/signin', signIn)

    return router
}