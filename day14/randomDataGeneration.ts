import { faker } from "@faker-js/faker";


export class FakerData{

 static getFirstname(){
    let fname=faker.person.firstName
    return fname
 }

 static getCreditNumber(){
    return faker.finance.creditCardNumber
 }

}