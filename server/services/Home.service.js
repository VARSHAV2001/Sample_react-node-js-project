const DetailsViewDto = require("../dtos/details-view-dto");
const Details = require('../models/details');
const ServiceResponse = require('../utilities/service.response');

const getAll = async () => {
    const response = new ServiceResponse();

    try {
        const allDetails = await Details.findAll();
        if (allDetails.length === 0) {
            response.addError('Details', 'Details not found');
            return response;
        }
        const details = allDetails.map((detail) => {
            const dto = new DetailsViewDto();
            dto.id = detail.id;
            dto.title = detail.title;
            dto.description = detail.Description;
            dto.images = detail.images;
            return dto;
        });
        response.result = { details };
        return response;
    } catch (error) {
        response.addError('Database', error);
        return response;
    }
}

module.exports = {
    getAll
}