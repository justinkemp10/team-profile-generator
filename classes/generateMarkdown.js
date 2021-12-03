// TODO: Create a function to generate markdown for html page
function generateMarkdown(data) {
    console.log('In GenerateMarkdown:', data);
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
        <div class="card" style="width: 14rem;">
            <div class="card-header bg-primary text-white font-weight-bold">
                <h3>Name</h3>
                <h5>Job Title</h5>
            </div>
            <div class="card-body d-flex justify-content-center">
                <div class="card" style="width: 11rem;">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                    </ul>
                </div>
            </div>
        </div>
    </main>
    </body>
</html>
    `
};
  
  module.exports = generateMarkdown;