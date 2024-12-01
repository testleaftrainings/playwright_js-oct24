import {test as baseTest} from '@playwright/test'
import { Login } from './LoginPage'
import { HomePage } from './HomePage'


type leaftapsFixture={
    lp:Login
    hp:HomePage
}

export const test=baseTest.extend<leaftapsFixture>(
    {
  lp:async({page},use)=>{
    const loginPage=new Login(page)
    await loginPage.navigate()
    await loginPage.enterCredentials()
    await loginPage.clickLogin()
    await use(loginPage)
  },

  hp:async({page},use)=>{
       const hompg=new HomePage(page)
       use(hompg)
  }

})