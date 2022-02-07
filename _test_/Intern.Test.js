const Intern = require("../Library/Intern");

test("Set intern school", () => {
   const testSchool = "ABC Society";
   const intern = new Intern("Jean ValJean", 24601, "jean@lesmis.com", testSchool);

   expect(intern.school).toBe(testSchool);
});

test("Set school using getSchool()", () => {
   const testSchool = "ABC Society";
   const intern = new Intern("Jean ValJean", 24601, "jean@lesmis.com", testSchool);

   expect(intern.getSchool()).toBe(testSchool);
});

test( "Use getRole() to return \"Intern\" as role", () => {
   const testRole = "Intern";
   const intern = new Intern("Jean ValJean", 24601, "jean@lesmis.com", "ABC Society");

   expect(intern.getRole()).toBe(testRole);
});