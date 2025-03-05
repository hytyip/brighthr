const { expect } = require('@playwright/test');

exports.EmployeesPage = class EmployeesPage {
    /*
     * @param {import('@playwright/test').Page} page
    */
   constructor(page) {
    this.page = page;
    this.employeeSidebar = page.getByTestId('sideBar').getByRole('link', { name: 'Employees' });
    this.employeeHeader = page.getByRole('heading', {name: 'Employee hub'});
    this.addEmployeeButton = page.getByRole('button', { name: 'Add employee' });
   }

   // Navigate to Bright HR Dashboard
   async goToDashBoard() {
    await this.page.goto('https://sandbox-app.brighthr.com/dashboard');
   }

   // Navigate to Employee Tab
   async navigateToEmployeePage() {
    await expect(this.employeeSidebar).toBeVisible();
    await this.employeeSidebar.click();

    await expect(this.employeeHeader).toBeVisible();
   }

   // Add a new employee
   async addEmployee() {
    await this.addEmployee.click();
   }
}