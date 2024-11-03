///to create a custom type of data -userdefined

type dimension={
    height:number
    width:number
    status?:boolean   //optional
}

//shape 
//dimension as well as circle

let Rec:dimension={height:120,width:90}

//Object literal -->key value pair

type empDetails=string|number|boolean

let employeeName:empDetails="Ramya"
employeeName=123
let employeePn:empDetails=85930034232
let empoyeeStatus:empDetails=true

//intersection

//admin-->role
//user-->role 
type admin={system:string}
type user={workspace:string}

type employee=admin & user

let vidya:employee={system:"individual",workspace:"Office"}

let Sukritha:admin={system:"Server"}

console.log(Sukritha)
//phno=23749054
//name="fef"

//dimension -->height width radius
type edgebasedObject={ height:number,width:number}

type sphericalOject={radius:number}

let square:edgebasedObject={height:39,width:25}

let circle:sphericalOject={radius:2.14}

let shape: edgebasedObject | sphericalOject ={height:23,width:10}

let shape2: edgebasedObject & sphericalOject ={height:23,width:10,radius:10}