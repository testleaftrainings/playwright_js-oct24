import { defineConfig, devices } from '@playwright/test';

import dotenv from 'dotenv'
import path from 'path'

 dotenv.config({ path: path.resolve(__dirname, 'data/staging.env') });

export default defineConfig({
  //timeout:60000, //overrides default test timeout -30000
  expect:{
   timeout:20000 //20s
  },
  testDir: './tests',
  reporter: [['html',{open:'always'}]],  
  testMatch:"**/*/*.spec.ts",
  use: {   
    trace: 'on',   
    headless:false,
    screenshot:'on',
    video:'on', 
    baseURL:process.env.BaseUrl
    
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] ,
      actionTimeout:20000 //for all the actions , click,clear, fill
      },
    },

  ]
});
