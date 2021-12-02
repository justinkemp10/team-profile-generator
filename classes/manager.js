const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }
    getName() {
        console.log(`Name: ${this.name}`);
    }
    getId() {
        console.log(`ID: ${this.id}`);
    }
    getEmail() {
        console.log(`Email: ${this.email}`);
    }
    getOfficeNumber() {
        console.loge(`Office Number: ${this.officeNumber}`);
    }
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;