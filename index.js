// TODO:
const Employee = require("./classes/employee");
const Manager = require("./classes/manager");
const Engineer = require("./classes/engineer");
const Intern = require("./classes/intern");
const fs = require("fs");
const inquirer = require("inquirer");
const jest = require("jest");

const generateMarkdown = require("./classes/generateMarkdown");

const employees = [];

// TODO:

function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is your name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is your Manager's ID number?",
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is your office number?',
            name: 'officeNumber',
        },
    ])
    .then((res) => {
        const mgr = new Manager(
            res.name,
            res.id,
            res.email,
            res.officeNumber
        );
        employees.push(mgr);
        // console.log("Manager Info: " + mgr);
        inquireTeam();
    });
};

function inquireTeam() {
    inquirer.prompt([
        {
            type: 'list',
            message: "Would you like to add another team member?",
            choices: ["Yes", "No"],
            name: 'prompt',
        }
    ])
    .then((res) => {
        if (res.prompt === "Yes") {
            addTeamMember();
        } else {
            writeToFile('profile.html', employees);
        }
    })
}

function addTeamMember() {
    inquirer.prompt([
        {
            type: 'list',
            message: "What position does the team member hold?",
            choices: ["Engineer", "Intern", "Manager"],
            name: 'position',
        }
    ])
    .then((res) => {
        if (res.position === "Engineer") {
            addEngineer();
        } else if (res.position === "Intern") {
            addIntern();
        } else {
            addManager();
        }
    })
}

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is your name?",
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your ID number?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'github',
        },
    ])
    .then((res) => {
        const eng = new Engineer(
            res.name,
            res.id,
            res.email,
            res.github
        );
        employees.push(eng);
        inquireTeam();
    })
};

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is your name?",
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your ID number?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What school do you currently attend?',
            name: 'school',
        },
    ])
    .then((res) => {
        const int = new Intern(
            res.name,
            res.id,
            res.email,
            res.school
        );
        employees.push(int);
        inquireTeam();
    });
};

// TODO: Create a function to write html file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if (err) throw err;
        console.log('The webpage has been generated successfully.');
        // console.log('Employees: ' + employees);
    });
};


addManager();