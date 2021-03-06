// Setting up dependencies
const fs = require('fs');
const inquirer = require('inquirer');


// Setting up constructor functions
const managerQuestions = require("./Library/ManagerQuestions");
const engineerQuestions = require("./Library/EngineerQuestions");
const internQuestions = require("./Library/InternQuestions");
const addEmployeeQuestion = require("./Library/AddEmployee");
const Manager = require("./Library/Manager");
const Engineer = require("./Library/Engineer");
const Intern = require("./Library/Intern" );
const holdHtml = require("./Library/HTML-Generation");


// Set up array for team profile data
let teamProfileArray = [];


// Intake of information - Manager
function addManagerProfile() {
    inquirer.prompt(managerQuestions)
    .then(function(data) {
        const managerName = data.managerName;
        const managerId = data.managerId;
        const managerEmail = data.managerEmail;
        const managerOffice = data.managerOffice;
        const teamMember = new Manager(managerName, managerId, managerEmail, managerOffice);
        teamProfileArray.push(teamMember);
        addNonManagerTeamMember();
    });
};

function addNonManagerTeamMember() {
    inquirer.prompt(addEmployeeQuestion)
    .then(function(data) {
        switch (data.menuChoices) {
            case "Add an Engineer Profile":
                addEngineerProfile();
                break;
            case "Add an Intern Profile":
                addInternProfile();
                break;
            case "Team completed, ready to generate team page":
                generateHtmlFile();
            break;
        };
    });
 };
 
// Intake of information - Engineer
function addEngineerProfile() {
    inquirer.prompt(engineerQuestions)
    .then (function(data) {
        const engineerName = data.engineerName;
        const engineerId = data.engineerId;
        const engineerEmail = data.engineerEmail;
        const engineerGithub = data.engineerGithub;
        const teamMember = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);
        teamProfileArray.push(teamMember);
        addNonManagerTeamMember();
    });
};

// Intake of information - Intern
function addInternProfile() {
    inquirer.prompt(internQuestions)
    .then (function(data) {
        const internName = data.internName;
        const internId = data.internId;
        const internEmail = data.internEmail;
        const internSchool = data.internSchool;
        const teamMember = new Intern(internName, internId, internEmail, internSchool);
        teamProfileArray.push(teamMember);
        addNonManagerTeamMember();
    });
};

// Output to HTML file
const writeToFile = (holdHtmlArray) => {
    return new Promise((resolve, reject) => {
       // Name the file after the team name
       outputFileName = teamProfileArray[0].toLowerCase();
       outputFileName = outputFileName.replace(/ /g, "-");
 
       fs.writeFile(`./html/${outputFileName}.html`,holdHtmlArray.join(""), function(err) {
          if (err) {
                reject(err);
             return;
            };
          resolve({
                ok: true,
                message: 'Your html file has been created in the "html" folder' 
            });
        });
    });
 };

function generateHtmlFile() {
    const holdHtmlArray = holdHtml.generateHtml(teamProfileArray);
    writeToFile(holdHtmlArray);
};
 

// Start the application and display opening message
function init() {
    inquirer.prompt([
       {
            type: "input",
            message: "This is an automated team profile generator.  Please begin by entering the team name",
            name: "teamName",
            validate: teamNameInput => {
                if (teamNameInput && teamNameInput.trim().length > 0) {
                    return true;
                }
                else {
                    console.log("Please enter the team name:");
                    return false;
                };
            }
        }    
    ])
    .then(function(data) {
        const teamName = data.teamName;
        teamProfileArray.push(teamName);
        addManagerProfile();
    });
};
 
// Initialise function
init();
