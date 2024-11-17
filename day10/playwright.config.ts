import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
  //timeout:60000, //overrides default test timeout -30000
  expect:{
   timeout:20000 //20s
  },
  testDir: './tests',
  reporter: [['html',{open:'always'}]],  
  //retries:2,
  //fullyParallel:true,
  //testMatch:[``,``], to take input as the file name spec.ts
  //testIgnore:`**/*/readEnv.spec.ts -ignored file spec.ts from the execution
  grep:[/Login/], //to takes pattern from the test tile
 // grepInvert:/Login/, //ignore the test from the execution with the matching test  title pattern
  use: {   
    trace: 'on',   
    headless:false,
    screenshot:'on',
    video:'on' 
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] ,
      actionTimeout:20000, //for all the actions , click,clear, fill
   //   viewport:{"height":1230,"width":234},
        launchOptions:{
         // slowMo:300,
          args:["--start-maximized"]
        }
    },
    },

  ]
});
