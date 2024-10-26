
function processInput(user,logincredential){
    console.log("Check for authorization")
           logincredential(user)
}
//call =login(user)
//let vari=fnName(value){]
//vari("")
function login(user){
    console.log("Authorized user" +user)
}
processInput("vidya",login)



//callin gone function as argument to other function
function browserName(browser){
    browser() 
}
function browserVersion(status){
     status()
}

function browserStatus(){
    console.log("status")
}

//multiple callback function are sent as an argument in way of nested -->callback hell

browserName(browserVersion(browserStatus))

//Promise



/*

processInput will be called
   -->vidya-->value login -->functionname sending as varivbale  -loginCredential
   -->logincreditial(vidya) -->login(vidya)




*/
