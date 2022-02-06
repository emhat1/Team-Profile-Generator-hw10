[
   {
      type: "list",
      name: "menuChoices",
      message: "Please select your next option",
      choices: ["Add an Engineer Profile", "Add an Intern Profile", "Team completed, ready to generate team page"],
      validate: menuChoicesInput => {
         if (menuChoicesInput === "Add an Engineer Profile" || menuChoicesInput === "Add an Intern Profile") {
            return true;
         }
         else if(menuChoicesInput === "Team completed, ready to generate team page") {
            return true;
         }
         else {
            console.log("Please select your next option:");
            return false;
         };
      }
   }
];