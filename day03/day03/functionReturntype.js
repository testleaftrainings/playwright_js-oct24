//import {browser} from '../day03/functionTypes'
function browserStatus(status){
    console.log("Response is 200") //information
    console.log("Status from the function" +status)
   //success=false
    return status//gives the data to the function itself -end of status
   }
  let bStatus=browserStatus(true)
  //  console.log(bStatus)
 //  console.log(browserStatus("404-Error"))

launchBrowser()
   function launchBrowser(){
    if(bStatus===200){        
       console.log("launch browser") 
    }else{
        console.log("From the Else part " +bStatus)
    }
   }   

browser("edge")

   