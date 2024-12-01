export class Employee{

   public empName:string
   public  empId:string
   private  salary:number
   protected phno:number
   public readonly cvv:string


   constructor(){
    this.empName="Deepak"
    this.empId="emp23"
    this.salary=500000
    this.phno=8978903890
    this.cvv="213"
   }

    printdetails(){
    //this.empName="Vidya"
    console.log(`The emp details are ${this.empName}:${this.empId}:${this.salary}:${this.phno}`)
   }

   public get readPermission():number{
    return this.salary
   }

   public set alterData(newSal:number){
        this.salary=newSal
   }


}

const empData=new Employee()
empData.printdetails()
console.log(empData.empName)

empData.readPermission //it is a property and not method to call
console.log(`The salary with old value ${empData.readPermission}`)

empData.alterData=7000000
console.log(`Salary with new Value ${empData.readPermission}`)