import DataError from "../models/dataError.js";

export default class CustomerValidator {
    constructor() {
        this.errors = [];
    }

    validate(customer) {
        let requiredFields = "id firstName lastName age city type".split(" ");
        let isValid = true;
        for (const field of requiredFields) {
            if (!customer[field]) {
                isValid = false;
                this.errors.push(new DataError(`Validation problem. ${field} is required`, customer))
                return isValid;
            }
        }
        if (Number.isNaN(+customer.age)) {
            isValid = false;
            this.errors.push(new DataError(`Validation problem. ${customer.age} is not a number`, customer))
            return isValid;
        }
        if (customer.type !== "customer") {
            isValid = false;
            this.errors.push(new DataError(`Validation problem. Customer type is not correct`, customer))
            return isValid;
        }

        return isValid;
    }
}