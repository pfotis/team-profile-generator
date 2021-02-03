const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testGitHub = "GitHubUser";
  const e = new Engineer("Peter", 2021, "test@email.com", testGitHub);
  expect(e.github).toBe(testGitHub);
});

test("getRole() should return 'Engineer'", () => {
  const testRole = "Engineer";
  const e = new Engineer("Peter", 2021, "test@email.com", "GitHubUser");
  expect(e.getRole()).toBe(testRole);
});

test("Can get GitHub username via getGithub()", () => {
  const testGitHub = "GitHubUser";
  const e = new Engineer("Peter", 2021, "test@email.com", testGitHub);
  expect(e.getGithub()).toBe(testGitHub);
});
