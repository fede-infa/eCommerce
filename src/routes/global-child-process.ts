import {Router} from 'express'
import {getInfo, randoms} from '../controllers/processes'

export = (router:Router) =>{
    router
        .get('/global-process', getInfo)
        .get('/randoms', randoms)

    return router
}