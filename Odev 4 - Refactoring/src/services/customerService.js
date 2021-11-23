import { users } from "../data/users.js";

export default class CustomerService {
  constructor(loggerService) {
    this.customers = [];
    this.loggerService = loggerService;
  }

  load() {
    this.customers = users.filter((u) => u.type === "customer");
  }

  add(customer) {
    this.customers.push(customer);
    this.loggerService.log(customer);
  }

  list() {
    return this.customers;
  }

  getCustomerByID(id) {
    return this.customers.find((c) => c.id === id);
  }
}