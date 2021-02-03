const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const testName = "Peter";
  const e = new Employee(testName);
  expect(e.name).toBe(testName);
});

test("Can set id via constructor argument", () => {
  const testID = 2021;
  const e = new Employee("Peter", testID);
  expect(e.id).toBe(testID);
});

test("Can set email via constructor argument", () => {
  const testEmail = "test@email.com";
  const e = new Employee("Peter", 2021, testEmail);
  expect(e.email).toBe(testEmail);
});

test("Can get name via getName()", () => {
  const testName = "Peter";
  const e = new Employee(testName);
  expect(e.getName()).toBe(testName);
});

test("Can get id via getId()", () => {
  const testID = 2021;
  const e = new Employee("Peter", testID);
  expect(e.getId()).toBe(testID);
});

test("Can get email via getEmail()", () => {
  const testEmail = "test@email.com";
  const e = new Employee("Peter", 2021, testEmail);
  expect(e.getEmail()).toBe(testEmail);
});

