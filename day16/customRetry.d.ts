import { Page } from "@playwright/test"
declare module '@playwright/test'{
    interface page{
        delayedClick:(locator:string)=>Promise<void>
        delayedFill:(locator:string,value:string)=>Promise<void>
    }
}