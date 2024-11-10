import test from "@playwright/test";

test(`Handling window with sequential approach`, async ({ context, page }) => {

    await page.goto("https://www.amazon.in/")
    await page.locator("#twotabsearchtextbox").fill("Phones")
    // await page.keyboard.press('Enter') //keyboard event
    await page.locator("#twotabsearchtextbox").press('Enter')
    //create a promise

    
    const pagePromise = context.waitForEvent('page')
     page.locator("//span[contains(text(),'Lava')]").first().click()
    const lavaPage = await pagePromise; 
    //event is resolved here
    console.log(await lavaPage.title())
    await lavaPage.close()

     await page.bringToFront()  //to get the visibility of the page
    //mainpage action
    await page.locator("//span[text()='Get It Today']/preceding::input[@type='checkbox']/following-sibling::i").first().click()
    await page.waitForTimeout(3000)
    
})


test.only(`Handling window with concurrent approach`, async ({ context, page }) => {

    await page.goto("https://www.leafground.com/window.xhtml")
    
       const  [multiplePromise] =await Promise.all([             
             context.waitForEvent('page'),
             page.locator("//span[text()='Open Multiple']").click()
            /*
            click on open multiple-->[webtable, dashboard]
            await webPage.locator()
            await dashPage.locator()
            */
      ] )
      const countOFwindows= multiplePromise.context().pages()
      console.log(countOFwindows.length)

      countOFwindows.forEach(async element => {
           console.log(element.url())            
          console.log( await element.title())
      });


     let windowName="Web Table"
     let tabTitle:any
      for (let i=0;i<countOFwindows.length;i++){
            const title=await countOFwindows[i].title() //getting the title of each opened page
            if(title===windowName){
                 tabTitle=countOFwindows[i]
            }


      }


      await tabTitle.bringToFront()
      await tabTitle.locator("//input[@placeholder='Search']").fill("Japan")
      await tabTitle.waitForTimeout(4000)
     // await tabTitle.close()

    //   async function windowHandle(windowName:string){
    //     let tabTitle:any
    //      for (let i=0;i<countOFwindows.length;i++){
    //            const title=await countOFwindows[i].title() //getting the title of each opened page
    //            if(title===windowName){
    //                 tabTitle=countOFwindows[i]
    //            }
    //      }   
    // await tabTitle.bringToFront()
    // await tabTitle.locator("//input[@placeholder='Search']").fill("Japan")
    // await tabTitle.waitForTimeout(4000)
    //    }
   //windowHandle("Web Table")

   await page.locator("//span[text()='Close Window']").click()
   await tabTitle.locator("").click()
   await page.close()
   await context.close()
})


