const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employees = [];

const initApp = () =>{
    startHtml();
    addMember();
}

const addMember = () => {
    inquirer.prompt([{
        message: "Enter team member's name",
        name: "name"
    },
    {
        type: "list",
        message: "Select team member's role",
        choices: [
            "Engineer",
            "Intern",
            "Manager"
        ],
        name: "role"
    },
    {
        message: "Enter team member's id",
        name: "id"
    },
    {
        message: "Enter team member's email address",
        name: "email"
    }])
    .then(function({name, role, id, email}) {
        let descriptionRole = "";
        if (role === "Engineer") {
            descriptionRole = "GitHub username";
        } else if (role === "Intern") {
            descriptionRole = "school name";
        } else {
            descriptionRole = "office phone number";
        }
        inquirer.prompt([{
            message: `Enter team member's ${descriptionRole}`,
            name: "description"
        },
        {
            type: "list",
            message: "Would you like to add more team members?",
            choices: [
                "yes",
                "no"
            ],
            name: "moreMembers"
        }])
        .then(function({descriptionRole, moreMembers}) {
            let newMember;
            if (role === "Engineer") {
                newMember = new Engineer(name, id, email, descriptionRole);
            } else if (role === "Intern") {
                newMember = new Intern(name, id, email, descriptionRole);
            } else {
                newMember = new Manager(name, id, email, descriptionRole);
            }
            employees.push(newMember);
            addHtml(newMember)
            .then(function() {
                if (moreMembers === "yes") {
                    addMember();
                } else {
                    finishHtml();
                }
            });
        });
    });
}

const startHtml = () => {
    const data =    `<!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <meta http-equiv="X-UA-Compatible" content="ie=edge">
                            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
                            <title>Team Profile</title>
                        </head>
                        <body>
                            <nav class="navbar navbar-dark bg-dark">
                                <h1 class="navbar-brand mb-0">Team Profile</h1>
                            </nav>
                            <div class="container">
                                <div class="row">`;
    fs.writeFile("./output/team.html", data, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("start");
}

const addHtml = (member) => {
    return new Promise(function(resolve, reject) {
        const name = member.getName();
        const role = member.getRole();
        const id = member.getId();
        const email = member.getEmail();
        let data = "";
        if (role === "Engineer") {
            const gitHub = member.getGithub();
            data = `<div class="col-4">
                        <div class="card" style="margin: 25px">
                            <h4>${name}</h4>
                            <h5>Engineer</h5>
                            <ul>
                                <li>ID : ${id}</li>
                                <li>Email : ${email}</li>
                                <li>GitHub : ${gitHub}</li>
                            </ul>
                        </div>
                    </div>`;
        } else if (role === "Intern") {
            const school = member.getSchool();
            data = `<div class="col-4">
                        <div class="card" style="margin: 25px">
                            <h4>${name}</h4>
                            <h5>Intern</h5>
                            <ul>
                                <li>ID : ${id}</li>
                                <li>Email : ${email}</li>
                                <li>School : ${school}</li>
                            </ul>
                        </div>
                    </div>`;
        } else {
            const officePhone = member.getOfficeNumber();
            data = `<div class="col-4">
                        <div class="card" style="margin: 25px">
                            <h4>${name}</h4>
                            <h5>Manager</h5>
                            <ul>
                                <li>ID: ${id}</li>
                                <li>Email : ${email}</li>
                                <li>Office Phone : ${officePhone}</li>
                            </ul>
                        </div>
                    </div>`;
        }
        fs.appendFile("./output/team.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    }); 
}

const finishHtml = () => {
    const html = ` </div>
    </div>
    
</body>
</html>`;

    fs.appendFile("./output/team.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
}

initApp();

