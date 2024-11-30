import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://leaftaps.com/opentaps/control/main');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('demoSalesManager');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('crmsfa');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#label')).toContainText('CRM/SFA');
});