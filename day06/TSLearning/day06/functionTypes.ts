
function add (x:number,y:number):void{
  console.log( x+y)
}


function sub(x:number,y:number):number{
    return x-y
}

//optional parameter, default parameter


function employee(firstname:string,lastname:string,empStatus:boolean=true,address?:string) {
    // firstname="Mukta"
    // lastname="Agarwal"
    // address="Chennai"
  return `The employee details --> ${firstname} ${lastname} : ${empStatus} : ${address}`
}

console.log(employee("Mukta","Agarwal",false))
console.log(employee("Ramya","M",true,"Chennai"))