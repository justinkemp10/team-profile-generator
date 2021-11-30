// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const jest = require("jest");

const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is your name?',
    name: 'name',
  },
  {
    type: 'input',
    message: 'What is the description?',
    name: 'description',
  },
  {
    type: 'input',
    message: 'What are the installation instructions?',
    name: 'installInstructions',
  },
  {
    type: 'input',
    message: 'What is the usage information?'  ,
    name: 'usageInformation',
  },
  {
    type: 'input',
    message: 'What are the contribution guidelines?',
    name: 'guidelines',
  },
  {
    type: 'input',
    message: 'What are the test instructions?',
    name: 'testInstructions',
  },
  {
    type: 'list',
    message: 'Choose a license for my application:',
    choices: ["Apache", "BSD 3", "MIT"],
    name: 'license',
  },
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'github',
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
  }
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, generateMarkdown(data), (err) => {
//         if (err) throw err;
//         console.log('The README has been generated successfully.');
//     });
// }

// TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt(questions)
//     .then(function(answers) {
//         console.log(answers);
//         writeToFile('README.MD', answers);
//     })
// }

// Function call to initialize app
// init();