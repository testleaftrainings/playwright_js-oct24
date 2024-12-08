import test from '@playwright/test'


test(`To abort the images from loading`,async({page})=>{
   await page.route("**/*.{png,img,jpg,jpeg}",route=>route.abort())
   await page.goto("https://www.testleaf.com/")
   await page.waitForTimeout(5000)
})


test.only(`To get all the header information`,async({page})=>{

    await page.route(`**/aura?preloadActions`,(route,request)=>{
         if(request.method()=="POST"){
            console.log(request.url())
            console.log(request.headers())
            const header=request.allHeaders()
         }

        // delete Headers['']

            route.continue({
                postData:{
                    "Date":""
                }
            })

            route.fulfill({
                status:500,
                headers:{
                    "content-type":"application/txt"
                }
            })


    })

    await page.goto("https://login.salesforce.com/")
    await page.fill("#username","vidyar@testleaf.com")
    await page.fill("#password","Sales@123")
    await page.click("#Login")
    await page.waitForTimeout(5000)


})
