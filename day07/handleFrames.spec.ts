import test from "@playwright/test";

test.only(`Handling frames`,async({page})=>{  
    await page.goto("https://www.leafground.com/frame.xhtml")
    //to count the frames in the page
    const allFrames=page.frames()
    console.log(allFrames.length) //returns the number of frames in the page

    const frame1=allFrames[1]
    const frm1Ele=frame1.locator("#Click")
    await frm1Ele.click()
    console.log(await frm1Ele.innerText())



    //mainframe -->mainPage -->index 0
    const innerFrame =allFrames[4]   //(//iframe)[1]
    //inside first frame -->clickMe element
    const firstFramEle= innerFrame.locator("#Click")
    await firstFramEle.click()
    console.log(await firstFramEle.innerText())
 
})



test(`Handling frame object`,async({page})=>{  
    await page.goto("https://www.leafground.com/frame.xhtml")
    //to count the frames in the page
    const allFrames=page.frames()
    console.log(allFrames.length) //returns the number of frames in the page

    const outerFrame= page.frame({url:"https://www.leafground.com/page.xhtml"})
    const allChildFrames= outerFrame?.childFrames() //if it nested-->count of child frames
    console.log(allChildFrames?.length)
    const innerFrame=allChildFrames?.at(0)
    
//   innerframe.locator("#Click")
    
//const outerfrme? =FrmaeElent|null
     

    
 
})