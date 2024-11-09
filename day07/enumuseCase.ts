
import { chromium, Page } from "@playwright/test"

enum environmentUrl{
   dev="https://www.google.com/dev",
   qa="https://www.google.com/qa"

}

async function loadUrl(url:environmentUrl){

    
    const browser=await chromium.launch({headless:false})
    const context=await browser.newContext()
    const page=await context.newPage()
    handleAlert(page);
    await page.goto(url)
       // await page.close()
    // await context.close()
    // await browser.close()
}


loadUrl(environmentUrl.dev)
loadUrl(environmentUrl.qa)


async function handleAlert(page:Page){
    page.on('dialog',alertType=>{       
        const alertMessage=alertType.message()
        const dialogType=alertType.type()
        console.log(`${dialogType} having the message as ${alertMessage}`)
        if(dialogType ==='prompt'){
                alertType.accept("Vidya")
        }else{
            alertType.dismiss()  //cancel the confirm dialog
        }
      })
}



enum role{
    admin="adminData",
    user="userCredential"
} 

function roleCredentials(cred:role)
{
    console.log(cred)
}

roleCredentials(role.admin)



//object literal -->call the data key value pair
let userCredentials={
    admin:{
      username:"demo",
      password:"pwd"
    },
    user:{
         username:"demoUser",
      password:"pwd"
    }

}