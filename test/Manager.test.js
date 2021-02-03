const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
  const testOfficeNumber = 1;
  const e = new Manager("Peter", 2021, "test@email.com", testOfficeNumber);
  expect(e.officeNumber).toBe(testOfficeNumber);
});

test("getRole() should return 'Manager'", () => {
  const testRole = "Manager";
  const e = new Manager("Peter", 2021, "test@email.com", 1);
  expect(e.getRole()).toBe(testRole);
});

test("Can get office number via getOffice()", () => {
  const testOfficeNumber = 1;
  const e = new Manager("Peter", 2021, "test@email.com", testOfficeNumber);
  expect(e.getOfficeNumber()).toBe(testOfficeNumber);
});
