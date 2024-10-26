
//two way 
//using literal
let mentors=["Ravi","Micheal","Jagadeesh"]

let empDetails=["Vidya",true,90847389439]

//object 
let emp=new Array("Ranjini") //not recommended  

//to add and remove the data
//push ,unshift -->add the data in the array
//pop,shift -->remove the data in the array
console.log(mentors)
mentors.push("Hari") //adds the data at the end
console.log(mentors)

mentors.unshift("vidya")
console.log(mentors) //adds the data at the start

mentors.pop() //remove the last data
console.log(mentors)
mentors.shift()// remove the first appeared data
console.log(mentors)

//to get the size -how many ele in the array

console.log(mentors.length)

mentors[4]="Babu" //stating zero index
mentors[3]="subraja"
console.log(mentors)

mentors[10]="Gokul"
console.log(mentors)

console.log(mentors.at(6)) 

//remove the data in the particular index, replace the data ,count data of tdata
let newMentor =mentors.splice(1,3,"Ajay","Vinoth")
console.log(newMentor)
console.log(mentors)

let arr=mentors.slice(2,5) //returns the subarray
console.log(arr)


let mixedArray=[1,2,3,4,true,"Chrome",["java","js","c#"]]

let innerArray=mixedArray.filter((val=>Array.isArray(val)))
console.log(innerArray)


 let num=[1,2,3,3,4,5,3]
 num.forEach(val=>console.log(val))

 for(let val of num){
    console.log(val)
 }

 for (let val in num){
    console.log(val)
 }



// let filterNum=num.filter((val=>val==3))

// console.log(filterNum)

// let evenNumber=num.map(val=>val*2)
// console.log(evenNumber)


//k=2 ,count of accurence in the array

let counter=0;
function getOcccount(nums,k){
    for(let i=0;i<nums.length;i++){
        if(nums[i]==k){  //i=0 =>nums[0]= 1==2
            //i=1 ,nums[1]=2 ==2 
            counter++ //counter=0+1 ==>1+1+1
        }
    }
    return counter;
}


 let occurance=getOcccount("[1,2,3,4,2,3,6,2]",2)
 console.log(`the occurence 2 in the array is ${occurance}`)


 let number = [45,6,23,5,2];
 number.sort((a,b)=>a-b); 
 console.log(number);

 //spread syntax  -->merge two array
 let arr1 =[1,2,3,4,5]
 let arr2=[...arr1,6,7,8,9]
 console.log(arr2)

 //append two array
 
