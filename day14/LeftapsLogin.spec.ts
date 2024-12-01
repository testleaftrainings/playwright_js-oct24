// import test from '@playwright/test'

import { test } from './myFixture'
import { FakerData } from './randomDataGeneration'


let leadName:any
test(`Learn to integrate oops with pw`,async({lp,hp})=>{ 
   leadName=FakerData.getFirstname()
   console.log(leadName)
   await lp.verifyTitle()    
   await hp.clickCRM()
})