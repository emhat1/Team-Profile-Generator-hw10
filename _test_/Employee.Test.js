const Employee = require("../Library/Employee");

test("Create an employee object", () => {
   const employee = new Employee("Jean ValJean", 24601, "jean@lesmis.com");

   expect(typeof(employee)).toBe("object");
   expect(employee.name).toEqual(expect.any(String));
   expect(employee.id).toEqual(expect.any(Number));
   expect(employee.email).toEqual(expect.any(String));
});

test("Check to see if can getName()", () => {
   const testName = "Jean ValJean";
   const employee = new Employee(testName);

   expect(employee.getName()).toBe(testName);
});

test("Check to see if can getId()", () => {
   const testId = 24601;
   const employee = new Employee("Jean ValJean", testId);

   expect(employee.getId()).toBe(testId);
});

test("Check to see if can getEmail()", () => {
   const testEmail = "jean@lesmis.com";
   const employee = new Employee("Jean ValJean", 24601, testEmail);

   expect(employee.getEmail()).toBe(testEmail);
});

test("Use getRole() to return \"Employee\" as role", () => {
   const testRole = "Employee";
   const employee = new Employee("Jean ValJean", 24601, "jean@lesmis.com");

   expect(employee.getRole()).toBe(testRole);
});