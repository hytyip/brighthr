const { faker } = require('@faker-js/faker');
const testNino = require('test-nino');

 //Enum values for Rate
 const Rate = {
    Hourly: "Hourly",
    Daily: "Daily",
    Weekly: "Weekly",
    Monthly: "Monthly",
    Annually: "Annually"
}

//Enum values for payment frequency
const PaymentFrequency = {
    Weekly: "Weekly",
    BiWeekly: "BiWeekly",
    FourWeekly: "Four Weekly",
    Monthly: "Monthly"
}

//Enum values for Reason
const Reason = {
    Adjustment : "Adjustment",
    AdditionalResponsibilities: "Additional responsibilities",
    Demotion: "Demotion"
}
exports.Employee = class Employee {
    constructor() {
        this.firstName = faker.person.firstName(),
        this.middleName = faker.person.middleName(),
        this.lastName = faker.person.lastName(),
        this.gender = faker.person.gender(),
        this.dateOfBirth = faker.date.birthdate(),
        this.mobileNumber = faker.phone.number(),
        this.jobTitle = faker.person.jobTitle(),
        this.title = faker.person.prefix(),
        this.email = faker.internet.email(),
        this.workStartDate = faker.date.past(),
        this.probationEndDate = faker.date.future(),
        this.address1 = faker.location.street(),
        this.address2 = faker.location.streetAddress(),
        this.address3 = faker.location.streetAddress(),
        this.townCity = faker.location.city(),
        this.county = faker.location.county(),
        this.postCode = faker.location.zipCode(),
        this.bankAccountName = faker.person.fullName(),
        this.accountNumber = faker.finance.accountNumber(8),
        this.sortCode = faker.finance.accountNumber(6),
        this.bankName = faker.company.name(),
        this.bankBranch = faker.location.city(),
        this.sensitive = {
            taxCode : "1257L",
            nationalInsuranceNumber : testNino.random(),
            passport : {
                expiryDate : faker.date.future(),
                number : faker.number.bigInt({ min: 100000000 }),
                country : faker.location.country()
            },
            drivingLicence: {
                number : "",
                country : faker.location.country(),
                expiryDate : faker.date.future(),
                description : faker.vehicle.type()
            },
            visa : {
                expiryDate : faker.date.future(),
                number : faker.number.bigInt({ min: 10000000 })
            }
        },
        this.salaryDetails = {
            salary : faker.number.float({ min: 1000, max: 500000, multipleOf: 0.02 }),
            rate : Rate.Annually,
            paymentFrequency : PaymentFrequency.Monthly,
            effectiveFrom: faker.date.past(),
            reason : Reason.Adjustment,
            payrollNumber: faker.number.int({ min: 1, max: 100 })

        }
    }
}