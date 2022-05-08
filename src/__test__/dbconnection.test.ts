const { getConnection } = require('../dao/db/connection');
const collection = 'jest_user'

describe('Testing of connection to DB', () =>{
    it('Should return status: OK when connected to DB', async () =>{
        expect(await getConnection()).toMatchObject({status: 'OK'});
    })

})