//Questions for setting up the engineer's profile
 
module.exports = [{
    type: "input",
    name: "engineerName",
    message: "Please enter the engineer's full name",
    validate: engineerNameInput => {
        if (engineerNameInput && engineerNameInput.trim().length > 0) {
           return true;
        }
        else {
           console.log("Please enter the engineer's full name:");
           return false;
        };
     },
},
{
    type: "input",
    name: "engineerId",
    message: "Please enter the engineer's staff ID",
    validate: engineerIdInput => {
        if (engineerIdInput && engineerIdInput.trim().length > 0) {
           return true;
        }
        else {
           console.log("Please enter the engineer's staff ID:");
           return false;
        };
     },
},
{
    type: "input",
    name: "engineerEmail",
    message: "Please enter the engineer's email address",
    validate: engineerEmailInput => {
        if (engineerEmailInput && engineerEmailInput.trim().length > 0) {
           // Check for valid email address format
           if ( /^.+@.+\..+$/gi.test(engineerEmailInput)) {
              return true;
           };
        }
        else {
           console.log("Please enter the engineer's email address:");
           return false;
        };
     },
},
{
    type: "input",
    name: "engineerGithub",
    message: "Please enter the engineer's Github username",
    validate: engineerGithubInput => {
        if (engineerGithubInput && engineerGithubInput.trim().length > 0) {
           return true;
        }
        else {
           console.log("Please enter the engineer's Github username:");
           return false;
        };
     },
}
]