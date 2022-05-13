import { Request, Response, Router } from "express";
const { checkAuthentication, notLoggedIn } = require('../middlewares/authentication')

export = (router: Router) =>{
    router
        .get('/index',checkAuthentication , (req: Request, res: Response) => {
            res.render(`${__dirname}/../views/index`);
        })
        .get('/', notLoggedIn, (req:Request, res: Response) =>{
            res.render(`${__dirname}/../views/login`)
        })
        .get('/signup', (req:Request, res: Response) =>{
            res.render(`${__dirname}/../views/signup`)
        })
    
    return router;
}