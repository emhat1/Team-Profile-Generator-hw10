// For generation of an HTML document from Team Profile Array data

module.exports = {
   generateHtml(teamProfileArray) {
      const holdHtmlArray = [];
      const htmlHeader = `

      <!DOCTYPE html>
      <html lang = "en">
      <head>
         <meta charset = "UTF-8">
         <meta name = "viewport" content = "width = device-width, initial scale = 1.0">
         <meta http-equiv = "X-UA-Compatible" content = "ie = edge">
         <title>${teamProfileArray[0]}</title>
 
         <link rel="preconnect" href="https://fonts.googleapis.com">
         <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
         <link href="https://fonts.googleapis.com/css2?family=Crete+Round&family=PT+Sans+Caption&display=swap" rel="stylesheet">

         <link rel = "stylesheet" href = "style.css">
      </head>

      <body>
         <div class = "header">
         <h1>${teamProfileArray[0]} Team</h1>
      </div>
      <div class = "card-container">
      `;
         holdHtmlArray.push(htmlHeader);

      // Produce a profile for each team member by looping through Team Profile Array
      for (let i=1; i<teamProfileArray.length; i++) {
         let teamMemberHtml = `
            <div class = "team-member-card">
            <div class = "team-member-card-top">
               <h2>${teamProfileArray[i].name}</h2>
               `;

               // Assign an icon depending on team member's role
               if (teamProfileArray[i].role === "Manager") {
                  teamMemberHtml += `<h2 class="bi bi-kanban-fill"> ${teamProfileArray[i].role}</h2>`;
               }
               else if (teamProfileArray[i].role === "Engineer") {
                  teamMemberHtml += `<h2 class="bi bi-lightbulb"> ${teamProfileArray[i].role}</h2>`;
               }
               else if (teamProfileArray[i].role === "Intern") {
                  teamMemberHtml += `<h2 class="bi bi-mortarboard-fill">  ${teamProfileArray[i].role}</h2>`;
               };

               teamMemberHtml += `
            </div>
            <div class = "team-member-card-bottom">
               <p><b>Employee ID:</b> ${teamProfileArray[i].id}</p>
               <P><b>Email:</b><br><a href = "mailto:${teamProfileArray[i].email}">${teamProfileArray[i].email}</a></p>
         `;

         // If the team member is the manager, display the office number
         if (teamProfileArray[i].office) {
            teamMemberHtml += `<p><b>Office Number:</b><br>${teamProfileArray[i].office}</p>`;
         }
         // If the team member is an engineer, display the Github username and link
         else if (teamProfileArray[i].github) {
            teamMemberHtml += `<p><b>GitHub:</b><br><a href = "https://github.com/${teamProfileArray[i].github}">${teamProfileArray[i].github}</a></p>`;
         }
         // If the team member is an intern, display the intern's school name
         else if (teamProfileArray[i].school) {
            teamMemberHtml += `<p><b>School:</b><br>${teamProfileArray[i].school}</p>`;
         };

         teamMemberHtml += `
            </div>
         </div>
         `;
         holdHtmlArray.push(teamMemberHtml);
      };

      const htmlFooter = `
   </div>   
</body>
</html>
`;
      holdHtmlArray.push (htmlFooter);

      // Return the HTML text strings in the array object.
      return holdHtmlArray;
   }
};
