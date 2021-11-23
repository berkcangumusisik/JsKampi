import { MongoLogger } from "../crossCuttingConcerns/logging/logger.js";
import CustomerService from "../services/customerService.js";
import Customer from "../models/customer.js";
import CustomerValidator from "../validationRules/customerValidator.js";

export default class CustomerComponent {
  constructor() {
    this.logger = new MongoLogger();
    this.customerValidator = new CustomerValidator();
    this.customerService = new CustomerService(this.logger);
  }

  add() {
    let customerToAdd = new Customer(6, "Şevval", "Baydemir", "Kayseri", 23, 123789);
    customerToAdd.type = "custmr";
    if (this.customerValidator.validate(customerToAdd))
      this.customerService.add(customerToAdd);
    console.log(this.customerService.customers);
    console.log(this.customerValidator.errors);
  }

  load() {
    this.customerService.load();
  }

  list() {
    return this.customerService.list();
  }

  getCustomersSorted() {
    return this.customerService.customers.sort((customer1, customer2) => {
      if (customer1.firstName < customer2.firstName) {
        return -1;
      } else if (customer1.firstName === customer2.firstName) {
        return 0;
      } else {
        return 1;
      }
    });
  }
}