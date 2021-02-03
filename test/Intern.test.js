const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testSchool = "Monash";
  const e = new Intern("Peter", 2021, "test@email.com", testSchool);
  expect(e.school).toBe(testSchool);
});

test("getRole() should return 'Intern'", () => {
  const testRole = "Intern";
  const e = new Intern("Peter", 2021, "test@email.com", "Monash");
  expect(e.getRole()).toBe(testRole);
});

test("Can get school via getSchool()", () => {
  const testSchool = "Monash";
  const e = new Intern("Peter", 2021, "test@email.com", testSchool);
  expect(e.getSchool()).toBe(testSchool);
});
