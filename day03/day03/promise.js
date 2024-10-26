
function orderPizza(){
    console.log("Order pizza online")
   return new Promise((resolve,reject)=>{
    setTimeout(() => {
          const success=false;
            if(success){
               console.log("Pizza being prepared")
               resolve("cheese")
            }else{
                reject("Order cancelled")
            }
         }, 3000);
})   
}

// let pizza=orderPizza()
// console.log(`Lets eat ${pizza}`)

 orderPizza().then((pizzatype)=>console.log(pizzatype)).then()
            .catch((error)=>console.log(error))


//async and await

async function getPizza(){
        let pizza=  await orderPizza()  //wait time explicit concept written by the developer to break the promise status
        //awit fn()
        console.log("ready to eat"+pizza) 
}
          
getPizza()

//test(``,async ()=>{
    // browser.launch() ->pending/fullfilled /reject-timeout
    //await load 
    //await login   //30ms  timeout exception
    //})


