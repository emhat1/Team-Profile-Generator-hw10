// Setting up dependencies
const fs = require('fs');
const inquirer = require('inquirer');

// Setting up constructor functions
const managerQuestions = require( "./Library/ManagerQuestions.js" );
const engineerQuestions = require( "./Library/EngineerQuestions.js" );
const internQuestions = require( "./Library/InternQuestions.js" );


// Set up array for team profile data
let teamProfileArray = [];


// Intake of information
function addManagerProfile() {
    inquirer.prompt(managerQuestions)
    .then(function(data) {
       const managerName = data.managerName;
       const managerId = data.managerId;
       const managerEmail = data.managerEmail;
       const managerOfficeNum = data.managerOffice;
       const teamMember = new Manager(managerName, managerId, managerEmail, managerOffice);
       teamProfileArr.push(teamMember);
    });
};

function addEngineerProfile() {
    inquirer.prompt(engineerQuestions)
    .then (function(data) {
       const engineerName = data.engineerName;
       const engineerId = data.engineerId;
       const engineerEmail = data.engineerEmail;
       const engineerGithubUsername = data.engineerGithub;
       const teamMember = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);
       teamProfileArr.push(teamMember);
    });
};

function addInternProfile() {
    inquirer.prompt(internQuestions)
    .then (function(data) {
       const internName = data.internName;
       const internId = data.internId;
       const internEmail = data.internEmail;
       const internSchool = data.internSchool;
       const teamMember = new Intern(internName, internId, internEmail, internSchool);
        teamProfileArr.push( teamMember );
    });
};

// Output to HTML file


// Initialise function
