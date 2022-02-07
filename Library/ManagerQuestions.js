// Questions for setting up the manager profile

module.exports = [{
    type: "input",
    name: "managerName",
    message: "Please enter the manager's full name",
    validate: managerNameInput => {
        if (managerNameInput && managerNameInput.trim().length > 0) {
           return true;
        }
        else {
           console.log("Please enter the manager's full name:");
           return false;
        };
     },
},
{
    type: "input",
    name: "managerId",
    message: "Please enter the manager's staff ID",
    validate: managerIdInput => {
        if (managerIdInput && managerIdInput.trim().length > 0) {
           return true;
        }
        else {
           console.log("Please enter the manager's staff ID:");
           return false;
        };
     },
},
{
    type: "input",
    name: "managerEmail",
    message: "Please enter the manager's email address",
    validate: managerEmailInput => {
        if (managerEmailInput && managerEmailInput.trim().length > 0) {
           // Check for valid email address format
           if ( /^.+@.+\..+$/gi.test(managerEmailInput)) {
              return true;
           };
        }
        else {
           console.log("Please enter the manager's email address:");
           return false;
        };
     },
},
{
    type: "input",
    name: "managerOffice",
    message: "Please enter the manager's office number",
    validate: managerOfficeInput => {
        if (managerOfficeInput && managerOfficeInput.trim().length > 0) {
           return true;
        }
        else {
           console.log("Please enter the manager's office number:");
           return false;
        };
     },
}
]