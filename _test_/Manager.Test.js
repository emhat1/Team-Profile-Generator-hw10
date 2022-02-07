const Manager = require("../Library/Manager");

test("Setting manager's office number", () => {
   const testOffice = 1832;
   const manager = new Manager("Jean ValJean", 24601, "jean@lesmis.com", testOffice);

   expect(manager.office).toBe(testOffice);
});

test("Use getRole() to return \"Manager\" as role", () => {
   const testRole = "Manager";
   const manager = new Manager("Jean ValJean", 24601, "jean@lesmis.com", 1832);

   expect(manager.getRole()).toBe(testRole);
});