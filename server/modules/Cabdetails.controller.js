const service = require('../services/Cabdetails.service')

const getOne = async (req, res) => {
    const cabdetailsId = req.params.id;
    const result = await service.getOne(cabdetailsId);
    if (result.result) {
        return res.status(200).json(result.result.details);
    } else if (!result.isValid) {
        return res.status(400).json(result.errors);
    } else {
        return res.status(404).json(result.result);
    }
}

module.exports = {
    getOne
}