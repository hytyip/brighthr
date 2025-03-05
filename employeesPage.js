const { expect } = require('@playwright/test');

exports.EmployeesPage = class EmployeesPage {
    /*
     * @param {import('@playwright/test').Page} page
    */
   constructor(page) {
    this.page = page;
    this.employeeSidebar = page.getByTestId('sideBar').getByRole('link', { name: 'Employees' });
    this.addEmployeeButton = page.getByRole('button', { name: 'Add employee' });
   }

   async navigateToEmployeePage() {
    await expect(this.employeeSidebar).toBeVisible();
    await this.employeeSidebar.click();
   }

   async addEmployee() {
    await expect(this.addEmployee).toBeVisible();
    await this.addEmployee.click();
   }
}