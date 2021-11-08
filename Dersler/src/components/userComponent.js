import { BaseLogger, ElasticLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User Component Yüklendi.")

let logger1 = new ElasticLogger()

let userService = new UserService(logger1)

let user1 = new User(1,"Berkcan","Gümüşışk","Ankara")
let user2 = new User(2,"Baran","Gökçekli","Muğla")
userService.add(user1)
userService.add(user2)

console.log(userService.getById(1))
console.log(userService.getById(2))
console.log(userService.list())


//prototyping
let customer = {id:1, firstName:"Berkcan"}
customer.lastName = "Gümüşışık"
console.log(customer.lastName)