const UserService = require('../services/user');
const user = new UserService();

const { hashPassword } = require('../utils/bcrypt')

export const createUser = async (req, res, next) =>{
    try {
        let userReq = {...req.body};
        hashPassword(userReq.password);

        const newUser = await user.createUser(userReq);
    } catch (error) {
        res.status(400).json({
            msg: 'Error',
            error: error
        })
    }
}

export const getOne = async (req, res, next) =>{
    try {
        res.json({
            status: 200,
            msg: 'User controller'
        })
        
    } catch (error) {
        res.status(400).send({
            msg: 'Error',
            error: error,
        })
    }

}

