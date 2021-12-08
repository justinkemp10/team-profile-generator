const Engineer = require("./engineer");
const Intern = require("./intern");
const Manager = require("./manager");

// TODO: Create a function to generate markdown for html page
function generateMarkdown(data) {
    console.log('In GenerateMarkdown:', data);
    
    for (var i = 0; i < data.length; i++) {
        console.log('Employees: ', data[i]);
        if (data[i] === Manager) {
            managerRender();
        }
        else if (data[i] === Engineer) {
            engineerRender();
        }
        else if (data[i] === Intern) {
            internRender();
        }
    }
    return `
<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Profile</title>
    <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    </head>
    <body class="min-100-vh flex-column">
    <main class="flex-row justify-center align-center col-auto p-4 bg-light">
        <div id="div" class="card card-container" style="width: 14rem;">
            ${data.res}
        </div>
    </main>
    </body>
</html>
    `
};

function managerRender(res) {
    return `
    <div class="card" style="width: 14rem;">
        <div class="card-header bg-primary text-white font-weight-bold">
            <h3>${res.name}</h3>
            <h5>Manager</h5>
        </div>
        <div class="card-body d-flex justify-content-center card-container">
            <div class="card" style="width: 11rem;">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${res.id}</li>
                    <li class="list-group-item">Email: ${res.email}</li>
                    <li class="list-group-item">Office Number: ${res.officeNumber}</li>
                </ul>
            </div>
        </div>
    </div>
    `
};

function engineerRender(res) {
    return `
    <div class="card" style="width: 14rem;">
        <div class="card-header bg-primary text-white font-weight-bold">
            <h3>${res.name}</h3>
            <h5>Engineer</h5>
        </div>
        <div class="card-body d-flex justify-content-center card-container">
            <div class="card" style="width: 11rem;">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${res.id}</li>
                    <li class="list-group-item">Email: ${res.email}</li>
                    <li class="list-group-item">GitHub: ${res.github}</li>
                </ul>
            </div>
        </div>
    </div>
    `
};

function internRender(res) {
    return `
    <div class="card" style="width: 14rem;">
        <div class="card-header bg-primary text-white font-weight-bold">
            <h3>${res.name}</h3>
            <h5>Intern</h5>
        </div>
        <div class="card-body d-flex justify-content-center card-container">
            <div class="card" style="width: 11rem;">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${res.id}</li>
                    <li class="list-group-item">Email: ${res.email}</li>
                    <li class="list-group-item">School: ${res.school}</li>
                </ul>
            </div>
        </div>
    </div>
    `
};
  
module.exports = generateMarkdown;