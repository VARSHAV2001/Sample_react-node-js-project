const service = require('../services/Login.service')

const login = async (req, res) => {
    const result = await service.login(req.body);
    if(result.isValid){
        return res.status(200).json(result);
    }
    return res.status(400).json(result);
}

module.exports = {
    login
};