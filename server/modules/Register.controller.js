const service = require('../services/Register.service')

const Registration = async (req, res) => {
    const data = req.body;
    console.log(req.body);
    const result = await service.Registration(data);
    
    if (result.isValid) {
        res.status(201).json(result);
    } else {
        res.status(400).json(result);
    }
}

module.exports = {
    Registration
};