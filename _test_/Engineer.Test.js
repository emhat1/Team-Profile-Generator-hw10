const Engineer = require( "../Library/Engineer.js" );

test("Set engineer's Github username", () => {
   const testGithub = "jeanvaljean";
   const engineer = new Engineer("Jean ValJean", 24601, "jean@lesmis.com", testGithub);

   expect(engineer.github).toBe(testGithub);
});

test("Get Github account using getGithub()", () => {
   const testGithub = "jeanvaljean";
   const engineer = new Engineer("Jean ValJean", 24601, "jean@lesmis.com", testGithub);

   expect(engineer.getGithub()).toBe(testGithub);
});

test("Use getRole() to return \"Engineer\" as role", () => {
   const testRole = "Engineer";
   const engineer = new Engineer("Jean ValJean", 24601, "jean@lesmis.com");

   expect(engineer.getRole()).toBe(testRole);
});