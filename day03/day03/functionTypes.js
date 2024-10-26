

//Function expression
//export 
const browser=function launchBrowser(browserName){
    console.log("launching browser")
    return browserName
}
//browser -->business logic

console.log(browser("browser"))
console.log(launchBrowser("edge"))
let browserStatus=browser("browser") //result of the execution

//arrow function
const sum=(a,b)=>a+b
console.log(sum(2,3))
















// //Example for arrow and callback function
// setTimeout(()=>{
// console.log()
// },3000)