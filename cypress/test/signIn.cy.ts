import { hp } from "cypress/pom/homePage/methods/methods";
import { signIn } from "cypress/pom/signInPage/enums/signInEnums";
import {
  completeTheSignIn,
  verifyTheAlertMessage
} from "cypress/pom/signInPage/methods/methods";
import { siSt } from "cypress/pom/signInPage/strings/signInStrings";

describe("Sign In", () => {
  it("Verifies sign in text and clicks on it", () => {
    cy.getText("a", "Sign In").click();
  });

  it("Verifies the current url", () => {
    hp.verifyUrl(`/customer/account/login`);
  });

  it("Verifies the error message for email and password", () => {
    cy.getText("span", siSt.strings.SIGN_IN_BUTTON_TEXT).click();
    cy.getText(`#${signIn.EMAIL}-error`, siSt.strings.ERROR_MESSAGE_TEXT);
    cy.getText(`#${signIn.PASSWORD}-error`, siSt.strings.ERROR_MESSAGE_TEXT);
  });

  it("Verifies the alert message when unregistered email id entered", () => {
    completeTheSignIn("abc@def.com", `${Cypress.env("password")}`);
    verifyTheAlertMessage();
  });

  it("Verifies the error message when invalid email entered", () => {
    completeTheSignIn("email", `${Cypress.env("password")}`);
    cy.getText(
      `#${signIn.EMAIL}-error`,
      siSt.strings.ENTER_VALID_EMAIL_WARNING
    ).and("have.css", "color", "rgb(224, 43, 39)");
  });

  it("Verifies the error message when invalid password entered", () => {
    completeTheSignIn(
      `${Cypress.env("email")}`,
      `${Cypress.env("password")}_bgh45`
    );
    verifyTheAlertMessage();
  });

  it("Completes the sign in", () => {
    completeTheSignIn(`${Cypress.env("email")}`, `${Cypress.env("password")}`);
    cy.get(".greet")
      .invoke("text")
      .then((text) => {
        if (text.includes("Welcome")) {
          cy.log("Test case status: PASSED");
          cy.getText("h1", siSt.strings.HP);
        } else {
          cy.log("Test case status: FAILED");
        }
      });
  });
});
