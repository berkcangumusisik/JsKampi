import { users } from "../data/users.js";

export default class EmployeeService {
  constructor(loggerService) {
    this.employees = [];
    this.loggerService = loggerService;
  }

  load() {
    this.employees = users.filter((u) => u.type === "employee");
  }

  add(employee) {
    this.employees.push(employee);
    this.loggerService.log(employee);
  }

  list() {
    return this.employees;
  }

  getEmployeeByID(id) {
    return this.employees.find((e) => e.id === id);
  }
}