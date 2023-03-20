const DetailsViewDto = require("../dtos/details-view-dto");
const Details = require('../models/details');
const ServiceResponse = require('../utilities/service.response');

const getOne = async (id) => {
    const response = new ServiceResponse();

    try{
        const eachDetails = await Details.findByPk(id);
        console.log(eachDetails)

        if(!eachDetails){
            response.addError('Details', 'Cab details not found');
            return response;
        }

        const dto = new DetailsViewDto();
        dto.title = eachDetails.title;
        dto.description = eachDetails.Discription;
        dto.images = eachDetails.images;
        response.result = { eachDetails : dto };

        return response;
    } catch (err) {
        response.addError('Error', err)
        return response;
    }

}

module.exports = {
    getOne
}