import * as XLSX from 'xlsx';
import { test } from '@playwright/test';
import path from 'path';

//pre requisite install xlsx -> npm install xlsx

// Function to read Excel file
function readExcelFile(filePath: string): any[] {
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  // Convert the worksheet to JSON
  const data = XLSX.utils.sheet_to_json(worksheet);
  return data;
}


const filePath=path.join(__dirname,"../../data/credentials.xlsx")
    // Reading Excel data
  const excelData = readExcelFile(filePath);

// Playwright Test
for(const data of excelData){
test(`Read Excel Data ${data.username}`, async ({ page }) => {
    await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.fill("#username",data.username)
        await page.fill("#password",data.password)
        await page.click(".decorativeSubmit")    
     
});
}