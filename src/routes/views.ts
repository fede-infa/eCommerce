import { Request, Response, Router } from "express";

export = (router: Router) =>{
    router
        .get('/index', (req: Request, res: Response) => {
            res.render(`${__dirname}/../views/index`);
        })
        .get('/',(req:Request, res: Response) =>{
            res.render(`${__dirname}/../views/login`)
        })
    
    return router;
}