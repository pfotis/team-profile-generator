onst inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employees = [];

function addMember() {
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

addMember();

