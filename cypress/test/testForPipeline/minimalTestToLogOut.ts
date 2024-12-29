import { signOff } from "cypress/pom/signInPage/methods/methods";

//This test is created for pipeline execution
describe("Log out: minimal test", () => {
  it("Executes minimal logout test", () => {
    cy.log("It's a minimal logout test");
    signOff();
  });
});
