import test from "@playwright/test";
import path from "path";

test(`File Upload`,async({page})=>{
    
  await page.goto("https://www.leafground.com/file.xhtml")
  //when upload element has the attribute as type=file
  //await page.locator(".card").filter({hasText:"Basic Upload"})
 // .locator("//span[text()='Choose']/following-sibling::input")
  //.setInputFiles([path.join(__dirname,"../.././data/sample.txt")])
  //await page.locator("//span[text()='Choose']/following-sibling::input").first().setInputFiles("")
  //.setInputFiles("./tests/day08/week4day2.txt")
  //if type=file  attribute not available
  //event listener -->page perspective
      const filePromise=page.waitForEvent('filechooser')
      await page.locator(".card").filter({hasText:"Basic Upload"})
  .locator("//span[text()='Choose']/following-sibling::input").click()
    const uploadFile=await filePromise
    //uploadFile.isMultiple() -return boolean about the file upload status 
    await uploadFile.setFiles([path.join(__dirname,"../.././data/sample.txt")])
  //  await uploadFile.setFiles(["filename.img","filename.img"]) -multiple upload
})

test.only (`File download `,async({page})=>{
    await page.goto("https://www.leafground.com/file.xhtml")
    //event listener
    const fileDownload=page.waitForEvent('download')
    await page.getByText("Download",{exact:true}).click()
    //Basic download , download
    const downloadFile=await fileDownload
    await downloadFile.saveAs("/Download/"+downloadFile.suggestedFilename())

})