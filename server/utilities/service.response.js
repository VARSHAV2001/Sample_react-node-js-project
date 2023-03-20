class ServiceResponse {
    errors = [];
    result = null;
    isValid = true;

    constructor() {
        this.errors = {};
    }

    addError(key, value) {
        this.isValid = false;
        if (Object.prototype.hasOwnProperty(key)) {
            this.errors[key].push(value);
        } else {
            this.errors[key] = [value];
        }
    }
}

module.exports = ServiceResponse;