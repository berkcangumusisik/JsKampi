import { MongoLogger } from "../crossCuttingConcerns/logging/logger.js";
import EmployeeService from "../services/employeeService.js";
import Employee from "../models/employee.js";
import EmployeeValidator from "../validationRules/employeeValidator.js";

export default class EmployeeComponent {
  constructor() {
    this.logger = new MongoLogger();
    this.employeeValidator = new EmployeeValidator();
    this.employeeService = new EmployeeService(this.logger);
  }

  add() {
    let employeeToAdd = new Employee(6, "Nurana", "Jumageldiyeva", "Türkmenistan", 20, 5400);
    employeeToAdd.type = "employee";
    if (this.employeeValidator.validate(employeeToAdd))
      this.employeeService.add(employeeToAdd);
    console.log(this.employeeService.employees);
    console.log(this.employeeService.errors);
  }

  load() {
    this.employeeService.load();
  }

  list() {
    return this.employeeService.list();
  }

  getEmployeesSorted() {
    return this.employeeService.employees.sort((employee1, employee2) => {
      if (employee1.firstName < employee2.firstName) {
        return -1;
      } else if (employee1.firstName === employee2.firstName) {
        return 0;
      } else {
        return 1;
      }
    });
  }
}