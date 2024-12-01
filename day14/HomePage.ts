import { Page } from "@playwright/test";
import { Login } from "./LoginPage";

export class HomePage extends Login{

constructor(page:Page){
    //mandatory to call the parent class constructor --keyword as super
    super(page)
}

 async clickCRM(){
     await this.page.click("text=CRM/SFA")
 }

}