
import { Employee } from "./learnAccessmodifier"

class EmpDetails extends Employee{    
    constructor(){
        super()
    }
        payroll(){
        console.log(this.phno)
        this.empId="emp34"  //overriding
        console.log(this.readPermission)
        this.alterData=100000
        console.log(this.readPermission)
        console.log("Payroll process")           
      
        
    }
}


const emp=new EmpDetails()
emp.payroll()
