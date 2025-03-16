// @ts-check
import { test, expect } from '@playwright/test';
import { EmployeesPage } from './employeesPage';
import { Employee } from './employee';
import { AddEmployeePage } from './AddEmployeePage';

const email = "qaTechTask100@grr.la";
const password = "A1234567890-";

test('Bright HR Lite Login and add new employee', async ({ page }) => {
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

  // Expect side bar display and employees is included
  const employeesPage = new EmployeesPage(page);
  await employeesPage.navigateToEmployeePage();
  
  // Get random employee data
  const employee = new Employee();
  console.log(employee);

  // Expect Add employee button is visible
  const addEmployeePage = new AddEmployeePage(page);
  await addEmployeePage.addEmployeeName(employee);
});
