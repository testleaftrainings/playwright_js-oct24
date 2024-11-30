import test, { chromium } from '@playwright/test'

test(`Learn perisitent Context`,async()=>{

   const userdata="./userDatadir" // the session infor
   const context= await chromium.launchPersistentContext("sessionData",{headless:false})
   const page=await context.newPage()
  const allpage=context.pages()
  console.log(allpage.length)
  await allpage[0].goto("https:www.google.com")
  await allpage[0].waitForTimeout(2000)

})



test(`Learn perisitent Context with default page`,async()=>{
//normal browser mode 
    const userdata="./userDatadir" // the session infor
    const context= await chromium.launchPersistentContext("sessionData",{headless:false})
   // const page=await context.newPage()
   const allpage=context.pages()
   console.log(allpage.length)
   await allpage[0].goto("https:www.google.com")
   await allpage[0].waitForTimeout(2000)
    //    await page.goto("https:www.google.com")
    //    await page.waitForTimeout(2000)
 })

 test.only(`Basic auth`,async()=>{           
        const context= await chromium.launchPersistentContext("sessionData",
            {
                headless:false,
                httpCredentials:{
                    username:"admin",
                    password:"testleaf"
                }
        })

         const page=await context.newPage()
         await page.goto("https://leafground.com/auth.xhtml")
         await page.getByRole("button",{name:"Basic Auth"}).click()
         await page.waitForTimeout(3000)
     
     })