import { Request, Response } from "express";

export = (router) =>{
    router.get('/', (req: Request, res: Response) => {
        res.render(`${__dirname}/../views/index`);
    })
    return router;
}