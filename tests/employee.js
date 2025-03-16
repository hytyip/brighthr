const { faker } = require('@faker-js/faker');
const testNino = require('test-nino');
const randExp = require('randexp');

 // Enum values for title
const Title = ['Mr', 'Mrs', 'Miss', 'Ms', 'Mx', 'Dr', 'Rvd']

 // Enum values for Gender
 const Gender = ['Male', 'Female', 'Non-binary', 'Transgender', 'Unspecified' ];

 // Enum values for Rate
 const Rate = ["Hourly", "Daily", "Weekly", "Monthly", "Annually"];

// Enum values for payment frequency
const PaymentFrequency = ["Weekly", "BiWeekly", "Four Weekly", "Monthly"];

// Enum values for Reason
const Reason = [ "Adjustment", "Additional responsibilities", "Demotion", "Employee setup", "Job change",
    "Length of service", "Light duties", "Other", "Pay rise", "Payroll reconciliation", "Promotion",
    "Restructure", "Secondment"];

// Date format
function dateFormat(fakerDate) {
    let date = ('0' + fakerDate.getDate()).slice(-2) 
    + '/' + ('0' + ( fakerDate.getMonth() + 1 )).slice(-2) 
    + '/' + fakerDate.getFullYear();

    return date;
}

exports.Employee = class Employee {
    constructor() {
        this.firstName = faker.person.firstName(),
        this.middleName = faker.person.middleName(),
        this.lastName = faker.person.lastName(),
        this.gender = Gender[Math.floor(Math.random() * Gender.length)],
        this.dateOfBirth = dateFormat(faker.date.birthdate({ max: 70, min: 18, mode: 'age' })),
        this.mobileNumber = faker.number.bigInt({ min: 100000000, max: 7719999999  }).toString(),
        this.workPhoneNumber = faker.number.bigInt({ min: 100000000, max: 7719999999  }).toString(),
        this.jobTitle = faker.person.jobTitle(),
        this.title = Title[Math.floor(Math.random() * Title.length)],
        this.email = faker.internet.email(),
        this.workStartDate = dateFormat(faker.date.past()),
        this.probationEndDate = dateFormat(faker.date.future()),
        this.address1 = faker.location.street(),
        this.address2 = faker.location.streetAddress(),
        this.address3 = faker.location.streetAddress(),
        this.townCity = faker.location.city(),
        this.county = faker.location.county(),
        this.postCode = new randExp(/^([A-Z]){2}([0-9]){3}([A-Z]){2}$/).gen(),
        this.bankAccountName = faker.person.fullName(),
        this.accountNumber = faker.finance.accountNumber(8),
        this.sortCode = new randExp(/^([0-9]){2}-([0-9]){2}-([0-9]){2}$/).gen().toString(),
        this.bankName = faker.company.name(),
        this.bankBranch = faker.location.city(),
        this.sensitive = {
            taxCode : "1257L",
            nationalInsuranceNumber : testNino.random(),
            passport : {
                expiryDate : dateFormat(faker.date.future()),
                number : faker.number.bigInt({ min: 100000000, max: 999999999 }).toString(),
                country : faker.location.country()
            },
            drivingLicence: {
                number : "",
                country : faker.location.country(),
                expiryDate : dateFormat(faker.date.future()),
                description : faker.vehicle.type()
            },
            visa : {
                expiryDate : dateFormat(faker.date.future()),
                number : faker.number.bigInt({ min: 10000000, max: 999999999 }).toString()
            }
        },
        this.salaryDetails = {
            salary : faker.number.float({ min: 1000, max: 500000, multipleOf: 0.02 }).toString(),
            rate : Rate[4],
            paymentFrequency : PaymentFrequency[3],
            effectiveFrom: dateFormat(faker.date.past()),
            reason : Reason[Math.floor(Math.random() * Reason.length)],
            payrollNumber: faker.number.int({ min: 1, max: 100 }).toString()

        }
    }
}