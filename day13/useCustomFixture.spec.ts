import { loginFixture } from "./customFixture";

loginFixture(`Learning to use the custom Fixture`,async({myFixture,homePage})=>{
 await homePage.locator("text=CRM/SFA").click()
 console.log(await homePage.title())
})