const { expect } = require('@playwright/test');

exports.AddEmployeePage = class AddEmployeePage {
    /*
     * @param {import('@playwright/test').Page} page
    */
   constructor(page) {
    this.page = page;
    this.employeeSidebar = page.getByTestId('sideBar').getByRole('link', { name: 'Employees' });
    this.employeeHeader = page.getByRole('heading', {name: 'Employee hub'});
    this.addEmployeeButton = page.getByRole('button', { name: 'Add employee' });

    // Add new employee name
    this.firstNameTextbox = page.getByRole('textbox', { name: 'New first name' });
    this.lastNameTextbox = page.getByRole('textbox', { name: 'New last name' });
    this.addNewEmployeeButton = page.getByRole('button', { name: 'Add new employee' });


    // Add employee details
    this.titleSelect = page.getByLabel('TitleSelect');
    this.middleNameTextbox = page.getByRole('textbox', { name: 'Middle name' });
    this.genderSelect = page.getByLabel('GenderSelect');
    this.dob = page.getByRole('textbox', { name: 'Date of birth' });
    this.emailTextbox =  page.getByRole('textbox', { name: 'Email' });
    this.mobileNumberTextbox = page.getByRole('textbox', { name: 'Mobile number' });
    this.workPhoneTextbox = page.getByRole('textbox', { name: 'Work phone' });
    this.jobTitleTextbox =  page.getByRole('textbox', { name: 'Job title' });
    this.employmentStartDateTextbox = page.getByRole('textbox', { name: 'Employment start date'});
    this.probationEndDateTextbox = page.getByRole('textbox', { name: 'Probation end date' });
    
    // Address
    this.address1Textbox = page.getByRole('textbox', { name: 'Address 1' });
    this.address2Textbox = page.getByRole('textbox', { name: 'Address 2' });
    this.address3Textbox = page.getByRole('textbox', { name: 'Address 3' });
    this.cityTextbox = page.getByRole('textbox', { name: 'Town/City' });
    this.countyTextbox = page.getByRole('textbox', { name: 'County' });
    this.postcodeTextbox = page.getByRole('textbox', { name: 'Postcode' });

    // Bank details
    this.accountNameTextbox = page.getByRole('textbox', { name: 'Name on account' });
    this.bankNameTextbox = page.getByRole('textbox', { name: 'Name of bank' });
    this.bankBranchTextbox = page.getByRole('textbox', { name: 'Bank branch' });
    this.accountNumberTextbox = page.getByRole('textbox', { name: 'Account number' });
    this.sortCodeTextbox = page.getByRole('textbox', { name: 'Sort code' });
    this.salaryTextbox = page.getByRole('textbox', { name: 'Salary' });
    this.rateSelect = page.getByLabel('RateSelect');
    this.paymentFrequencySelect = page.getByLabel('Payment frequencySelect');
    this.effectiveFromTextbox = page.getByRole('textbox', { name: 'Effective from' });
    this.reasonSelect = page.getByLabel('ReasonSelect');
  
    // Payroll details
    this.payrollNumberTextbox = page.getByRole('textbox', { name: 'Payroll number' });
    this.taxcodeTextbox = page.getByRole('textbox', { name: 'Tax code' });
    this.niNumberTextbox = page.getByRole('textbox', { name: 'NI number' });
    this.passportNumberTextbox = page.getByRole('textbox', { name: 'Passport number' });
    this.passportCountrySelect = page.getByTestId('passportCountryOfIssue');
    this.passportExpiryTextbox = page.getByRole('textbox', { name: 'Passport expiry date' });
    this.saveButton = page.getByRole('button', { name: 'Save and continue' });

    // Work details
    this.publicHolidaySelect = page.getByTestId('publicHolidaySelect');
    this.workPlaceTextbox = page.getByRole('textbox', { name: 'Place of work' });
    this.employeeTypeRegular = page.getByTestId('employee-type-radio-Regular');
    this.workPatternSelect = page.getByTestId('workingPatternSelect');
    this.workHour = page.getByTestId('fullTimeEquivalentWorkingWeek.hours');
    this.entitlementDays = page.getByTestId('entitlement-unit-radio-days');
    this.fullTimeLeave =  page.getByTestId('fullTimeAnnualLeaveDays');
    this.addAlltoBrightHRButton = page.getByRole('button', { name: 'Add all to BrightHR' });
    this.nextButton = page.getByRole('button', { name: 'Next' });
    this.sendButton = page.getByRole('button', { name: 'Send & continue' });
    this.employeeHubButton = page.getByRole('button', { name: 'Go to Employee Hub' });
   }

   // Add a new employee
   async addEmployee(employee) {
    await expect(this.addEmployeeButton).toBeVisible();
    await this.addEmployeeButton.click();
    
    //await page.getByTestId('BulkAddEmployee').click();
    
    await this.firstNameTextbox.fill(employee.firstName);
    await this.lastNameTextbox.fill(employee.lastName);
    await this.page.keyboard.press('Enter');

    await expect(this.titleSelect).toBeVisible();
    await this.titleSelect.selectOption(employee.title);
    await this.middleNameTextbox.fill(employee.middleName);
    await this.genderSelect.selectOption(employee.gender);
    await this.dob.fill(employee.dateOfBirth);
    await this.emailTextbox.fill(employee.email);
    await this.mobileNumberTextbox.fill(employee.mobileNumber);
    await this.workPhoneTextbox.fill(employee.workPhoneNumber);
    await this.jobTitleTextbox.fill(employee.jobTitle);
    await this.employmentStartDateTextbox.fill(employee.workStartDate);
    await this.probationEndDateTextbox.fill(employee.probationEndDate);

    //Input address
    await this.address1Textbox.fill(employee.address1);
    await this.address2Textbox.fill(employee.address2);
    await this.address3Textbox.fill(employee.address3);
    await this.cityTextbox.fill(employee.townCity);
    await this.countyTextbox.fill(employee.county);
    await this.postcodeTextbox.fill(employee.postCode);
    
    //Input bank details
    await this.accountNameTextbox.fill(employee.bankAccountName);
    await this.bankNameTextbox.fill(employee.bankName);
    await this.bankBranchTextbox.fill(employee.bankBranch);
    await this.accountNumberTextbox.fill(employee.accountNumber);
    await this.sortCodeTextbox.fill(employee.sortCode);

    // Input Tax and NI
    await this.taxcodeTextbox.fill(employee.sensitive.taxCode);
    await this.niNumberTextbox.fill(employee.sensitive.nationalInsuranceNumber);

    // Input Passport info
    await this.passportNumberTextbox.fill(employee.sensitive.passport.number);
    await this.passportCountrySelect.selectOption(employee.sensitive.passport.country);
    await this.passportExpiryTextbox.fill(employee.sensitive.passport.expiryDate);

    // Wait until Save button to be enable and then click it
    await expect(this.saveButton).toBeEnabled({timeout: 10000});
    await this.saveButton.click();

    // Input holiday info
    await expect(this.publicHolidaySelect).toBeVisible({timeout: 10000});
    await this.publicHolidaySelect.selectOption('ENGLANDANDWALES');

    await this.employeeTypeRegular.check();
    await this.workPatternSelect.selectOption("225011");
    await this.workHour.fill('35');

    await this.entitlementDays.check();
    await this.fullTimeLeave.fill('25');

    // Save and navigate back to employee hub
    await expect(this.saveButton).toBeEnabled();
    await this.saveButton.click();

    await expect(this.addAlltoBrightHRButton).toBeEnabled({timeout: 20000});
    await this.addAlltoBrightHRButton.click();

    await expect(this.nextButton).toBeEnabled({timeout: 15000});
    await this.nextButton.click();

    await this.sendButton.click();
    await this.employeeHubButton.click();
   }
}