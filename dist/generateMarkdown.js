const Engineer = require("../classes/engineer");
const Intern = require("../classes/intern");
const Manager = require("../classes/manager");

function managerRender(res) {
    return `
    <div class="card mr-3 mb-3" style="width: 16rem;">
        <div class="card-header bg-primary text-white font-weight-bold">
            <h3 class"text-capitalize">${res.name}</h3>
            <i class="fas fa-mug-hot"></i><h5>Manager</h5>
        </div>
        <div class="card-body d-flex justify-content-center">
            <div class="card" style="width: 11rem;">
                <ul class="list-group list-group-flush">
                    <li class="small list-group-item">ID: ${res.id}</li>
                    <a class="small list-group-item" href="mailto: ${res.email}">${res.email}</a>
                    <li class="small list-group-item">Office Number: ${res.officeNumber}</li>
                </ul>
            </div>
        </div>
    </div>
    `
};

function engineerRender(res) {
    return `
    <div class="card mr-3 mb-3" style="width: 16rem;">
        <div class="card-header bg-primary text-white font-weight-bold">
            <h3 class"text-capitalize">${res.name}</h3>
            <i class="fas fa-glasses"></i><h5>Engineer</h5>
        </div>
        <div class="card-body d-flex justify-content-center">
            <div class="card" style="width: 11rem;">
                <ul class="list-group list-group-flush">
                    <li class="small list-group-item">ID: ${res.id}</li>
                    <a class="small list-group-item" href="mailto: ${res.email}">${res.email}</a>
                    <li class="small list-group-item">GitHub: <span><a href="https://github.com/${res.github}" target="_blank">${res.github}</a></span> </li>
                </ul>
            </div>
        </div>
    </div>
    `
};

function internRender(res) {
    return `
    <div class="card mr-3 mb-3" style="width: 16rem;">
        <div class="card-header bg-primary text-white font-weight-bold">
            <h3 class"text-capitalize">${res.name}</h3>
            <i class="fas fa-user-graduate"></i><h5>Intern</h5>
        </div>
        <div class="card-body d-flex justify-content-center">
            <div class="card" style="width: 11rem;">
                <ul class="list-group list-group-flush">
                    <li class="small list-group-item">ID: ${res.id}</li>
                    <a class="small list-group-item" href="mailto: ${res.email}">${res.email}</a>
                    <li class="small list-group-item">School: ${res.school}</li>
                </ul>
            </div>
        </div>
    </div>
    `
};

// TODO: Create a function to generate markdown for html page
function generateMarkdown(data) {
    // console.log('In GenerateMarkdown:', data);
    let htmlVariable = '';
    
    for (var i = 0; i < data.length; i++) {
        // console.log('Employees: ', data[i]);
        if (data[i] instanceof Manager) {
            htmlVariable += managerRender(data[i]);
        }
        else if (data[i] instanceof Engineer) {
            htmlVariable += engineerRender(data[i]);
        }
        else if (data[i] instanceof Intern) {
            htmlVariable += internRender(data[i]);
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
    <script src="https://kit.fontawesome.com/4ea55cf5b2.js" crossorigin="anonymous"></script>
    </head>
    <body class="min-100-vh flex-column">
    <header class="bg-danger min-100-vh align-middle" style="height: 10rem">
        <h1 class="text-white text-center pt-5">My Team</h1>
    </header>
    <main class="flex-row justify-center align-center col-auto p-4 bg-light">
        <div class="row container-fluid justify-content-center">
            ${htmlVariable}
        </div>
    </main>
    </body>
</html>
    `
};
  
module.exports = generateMarkdown;