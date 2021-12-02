const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
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
    getSchool() {
        console.loge(`School: ${this.school}`);
    }
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;