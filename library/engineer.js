const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
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
    getGithub() {
        console.log(`GitHub Username: ${this.github}`);
    }
    getRole() {
        return 'Engineer';
    }
}