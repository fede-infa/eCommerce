import { Request, Response, Router } from "express";
const { checkAuthentication } = require('../middlewares/authentication')

export = (router: Router) =>{
    router
        .get('/index',checkAuthentication , (req: Request, res: Response) => {
            res.render(`${__dirname}/../views/index`);
        })
        .get('/', (req:Request, res: Response) =>{
            res.render(`${__dirname}/../views/login`)
        })
        .get('/signup', (req:Request, res: Response) =>{
            res.render(`${__dirname}/../views/signup`)
        })
    
    return router;
}