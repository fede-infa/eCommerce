import {randomNumber} from './randomNumber'

const quantity = process.argv[2] 
const minRange = process.argv[3]
const maxRange = process.argv[4]

const numberCoincidence = (quantity:number, minRange:number, maxRange:number) =>{
    let numbers:{} = {};
        for(let i = 0; i < quantity; i++){
            let number = randomNumber(minRange, maxRange);
            numbers[number] = (numbers[number] || 0) + 1;
        }
    return numbers;
}

process.on('message', msg =>{
    const sum = numberCoincidence(Number(quantity), Number(minRange), Number(maxRange));
    process.send!(sum)
})