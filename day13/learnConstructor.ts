import { BrowserContext, Page } from "@playwright/test"

class Login {

    username: string
    password: string

    //    constructor(){  //default constructor
    //     this.username="vidya"
    //     this.password="@123"
    //    }


    //treated as a method
    //  Login(){

    //  }

    constructor(user: string, pwd: string) {
        this.username = user
        this.password = pwd
        this.dologin()

    }
    dologin() {
        console.log(`The Credentials ${this.username} and ${this.password}`)

    }
    clickHomebutton(){

    }

}

const loginFunctionality=new Login("Mukta","234").clickHomebutton()
//loginFunctionality.dologin()

const loginData=new Login("Santhosh","456").clickHomebutton
//loginFunctionality.dologin()

new Login("Ramya","789").clickHomebutton()
new Login("Thenmozhi","#45")


class LaunchApp{
 
    page:Page

    constructor(page:Page,context:BrowserContext){
        this.page=page
    }

    async loadUrl(){
        await this.page.goto("")
    }
   
}