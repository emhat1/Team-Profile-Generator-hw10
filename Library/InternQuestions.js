// Questions for setting up the intern profile

module.exports = [{
    type: "input",
    name: "internName",
    message: "Please enter the intern's full name",
    validate: internNameInput => {
        if ( internNameInput && internNameInput.trim().length > 0 ) {
           return true;
        }
        else {
           console.log( "Please enter the intern's full name:" );
           return false;
        };
     },
}
{
    type: "input",
    name: "internId",
    message: "Please enter the intern's ID",
    validate: internIdInput => {
        if ( internIdInput && internIdInput.trim().length > 0 ) {
           return true;
        }
        else {
           console.log( "Please enter the intern's ID:" );
           return false;
        };
     },
}
{
    type: "input",
    name: "internEmail",
    message: "Please enter the intern's email address",
    validate: internEmailInput => {
        if ( internEmailInput && internEmailInput.trim().length > 0 ) {
           // Check for valid email address format
           if ( /^.+@.+\..+$/gi.test( internEmailInput )) {
              return true;
           };
        }
        else {
           console.log( "Please enter the intern's email address:" );
           return false;
        };
     },
}
{
    type: "input",
    name: "internSchool",
    message: "Please enter the intern's school",
    validate: internSchoolInput => {
        if ( internSchoolInput && internSchoolInput.trim().length > 0 ) {
           return true;
        }
        else {
           console.log( "Please enter the intern's school:" );
           return false;
        };
     },
}
]