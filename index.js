// TODO:
const Manager = require("./classes/manager");
const Engineer = require("./classes/engineer");
const Intern = require("./classes/intern");
const fs = require("fs");
const inquirer = require("inquirer");
const jest = require("jest");

const generateMarkdown = require("./classes/generateMarkdown");

const employees = [];

// TODO:

addManager();

function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is your name?",
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your Manager ID number?',
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
            res.enail,
            res.officeNumber
        );
        console.log("Manager Info: " + mgr);
        inquireTeam();
    });
};

function inquireTeam() {
    inquirer.prompt([
        {
            type: 'list',
            message: "Would you like to add another team member?",
            choices: ["Yes", "No"],
            name: 'teamMember',
        }
    ])
    .then((res) => {
        if (res.choices === "Yes") {
            addTeamMember();
        } else {
            renderHtml();
        }
    })
}

function addTeamMember() {
    inquirer.prompt([
        {
            type: 'list',
            message: "What position does the team member hold?",
            choices: ["Engineer", "Intern"],
            name: 'position',
        }
    ])
    .then((res) => {
        if (res.choices === "Engineer") {
            addEngineer();
        } else {
            addIntern();
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
            res.name = name,
            res.id = id,
            res.email = email,
            res.github = github
        );
        console.log("Engineer: " + eng);
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
            res.name = name,
            res.id = id,
            res.email = email,
            res.school = school
        );
        console.log("Intern: " + int);
        inquireTeam();
    });
};

// TODO: Create a function to write html file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if (err) throw err;
        console.log('The webpage has been generated successfully.');
    });
}

// TODO: Create a function to initialize app
function init() {
    writeToFile('profile.html', answers);
}

// Function call to initialize app
init();