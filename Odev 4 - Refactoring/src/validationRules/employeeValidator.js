import DataError from "../models/dataError.js"

export default class EmployeeValidator {
    constructor() {
        this.errors = [];
    }

    validate(employee) {
        let requiredFields = "id firstName lastName age city salary type".split(" ")
        let isValid = true
        for (const field of requiredFields) {
            if (!employee[field]) {
                isValid = false
                this.errors.push(new DataError(`Validation problem. ${field} is required`, employee))
                return isValid;
            }
        }
        if (Number.isNaN(+employee.age)) {
            isValid = false
            this.errors.push(new DataError(`Validation problem. ${employee.age} is not a number`, employee))
            return isValid;
        }
        if (Number.isNaN(+employee.salary)) {
            isValid = false
            this.errors.push(new DataError(`Validation problem. ${employee.salary} is not a number`, employee))
            return isValid;
        }
        if (employee.type !== "employee") {
            isValid = false;
            this.errors.push(new DataError(`Validation problem. Employee type is not correct`, employee))
            return isValid;
        }

        return isValid
    }
}