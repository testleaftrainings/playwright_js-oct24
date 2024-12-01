import { chromium, expect, Page } from "@playwright/test"


export class Login{

  //url  
  //enterusername  ->selector  ->credential value
  //enterpassword   -->selctor ->credential value
  //clickLoginbutton


  page:Page
    //no data is assigned
  url:string
  username:string
  password:string

  constructor(page:Page){
    this.page=page
    this.url="http://leaftaps.com/opentaps/control/main"
    this.username="demoCSR"
    this.password="crmsfa"
  }  
 
  async navigate(){       
        await this.page.goto(this.url)
  }


  async enterCredentials(){
        await this.page.fill("#username",this.username)
        await this.page.fill("#password",this.password)

  }

  async clickLogin(){
    await this.page.click(".decorativeSubmit")
  }

  async verifyTitle(){
//await this.page.title()
const title=await this.page.title()
     expect(title).toContain("Leaftaps")
  }

}

// async function loginFunction(){
//     const browser=await chromium.launch({headless:false})
//     const context=await browser.newContext()
//     const page=await context.newPage()
//     const loginPage=new Login(page)
//     await loginPage.navigate()
//     await loginPage.enterCredentials()
//     await loginPage.clickLogin()
// }

//loginFunction()