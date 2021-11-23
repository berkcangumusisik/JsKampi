import { BaseLogger, ElasticLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import Customer from "../models/customer.js"
import UserService from "../services/userService.js"
import CustomerComponent from "./customerComponent.js"

console.log("User Component Yüklendi.")

let logger1 = new ElasticLogger()

let userService = new UserService(logger1)

let user1 = new User(1,"Berkcan","Gümüşışk","Ankara")
let user2 = new User(2,"Baran","Gökçekli","Muğla")
userService.add(user1)
userService.add(user2)

console.log(userService.getEmployeeByID(1))
//console.log(userService.getCustomerByID(1))
//console.log(userService.listCustomers())


//prototyping
let customer = {id:1, firstName:"Berkcan"}
customer.lastName = "Gümüşışık"
console.log(customer.lastName)

console.log("---------------------------------")
userService.load()
let customerToAdd = new Customer(1,"Seda","Yılmaz","Ankara","fdgdfg");
customerToAdd.type = "customer"

userService.add(customerToAdd)
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
//console.log(userService.getCustomersSorted())
let customerComponent = new CustomerComponent()
customerComponent.load()
customerComponent.add()
console.log(customerComponent.list())