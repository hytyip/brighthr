// @ts-check
import { test, expect } from '@playwright/test';
import { EmployeesPage } from './employeesPage';
import { Employee } from './employee';

const email = "leu7edsq@getnada.com";
const password = "A1234567890-";

test('Bright HR Lite Login', async ({ page }) => {
  await page.goto('https://sandbox-app.brighthr.com/lite'); 

  // Click Log in button
  await page.getByRole('link', { name: 'Log in'}).click()
  
  // Expect both email and password textboxes to be visible.
  const emailTextbox = page.getByRole('textbox', { name: 'Email address' })
  const passwordTextbox = page.getByRole('textbox', { name: 'Password' })

  await expect(emailTextbox).toBeVisible();
  await expect(passwordTextbox).toBeVisible();

  // Enter email and password
  await emailTextbox.fill(email);
  await passwordTextbox.fill(password);

  // Click Login button
  await page.getByRole('button', { name: 'Login' }).click();

  // Click back to lite dashboard button
  await page.getByRole( 'button', { name: 'Back to Lite dashboard' }).click();


  // Expect side bar display and employees is included
  const employeesPage = new EmployeesPage(page);
  await employeesPage.navigateToEmployeePage();

  // Expect Add employee button is visible
  await employeesPage.addEmployee();

  // Get random employee data
  const employee1 = new Employee();
  console.log(employee1);

});
