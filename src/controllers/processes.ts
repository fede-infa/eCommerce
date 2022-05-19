import { Request, Response } from "express";
// import { numberCoincidence } from "../utils/calculations";
import { fork } from 'child_process'

function getArgv(){
    const args = process.argv.map( (value, index) =>{
        console.log(index, value)
        return value
    })

    return args;
}

const arrayArgv = getArgv()

export const getInfo = (req:Request, res:Response) =>{
    res.send({
        args: arrayArgv,
        dir: process.cwd(),
        pid: process.pid,
        nodeV: process.version,
        title: process.title,
        os: process.platform,
        memoryUsage: process.memoryUsage()
    })
}

export const randoms = (req:Request, res:Response) =>{

    if(req.query.quantity){
        const quantity = req.query.quantity;
        let forkResponse:{};
        const calculation = fork(__dirname + '/../utils/calculations', [quantity.toString(),'1','1000'])
        calculation.send('start')
        calculation.on('message', sum =>{
            forkResponse = sum;
            res.send(forkResponse);
            calculation.kill();
        });
    }
}