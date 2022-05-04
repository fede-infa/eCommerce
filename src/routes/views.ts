import { Request, Response, Router } from "express";

export = (router: Router) =>{
    router.get('/', (req: Request, res: Response) => {
        res.render(`${__dirname}/../views/index`);
    })
    return router;
}