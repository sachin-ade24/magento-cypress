import { suSt } from "cypress/pom/signupPage/strings/signupStrings";
import { idPartialValues } from "../enums/signupPageEnums";
import { spSe } from "../selectors/signupPageSelectors";

//For the data verification - data driven approach
export const verifiesData = () => {
  // Load the JSON data
  cy.fixture(suSt.strings.JSON_PATH).then((jsonData) => {
    jsonData.forEach((element: any) => {
      Object.keys(element).forEach((field) => {
        Object.keys(element[field]).forEach((subElement) => {
          cy.contains("span", element[field][subElement])
            .scrollIntoView()
            .should("be.visible");
        });
      });
    });
  });
};

export const typeThePassword = () => {
  sum
    .getInputTextbox(suSt.strings.PASSWORD)
    .clear({ timeout: 2000 })
    .type(`${Cypress.env("password")}`, { force: true });
};

export const passwordStrengthScenarios = () => {
  cy.get(`#${idPartialValues.PASSWORD_STRENGTH_LABEL}`)
    .invoke("text")
    .then((text) => {
      switch (text) {
        case "Weak":
          cy.log("Password strength is weak. Please change it.");
          typeThePassword();
          break;
        case "Medium":
          cy.log("Password strength is medium. Please change it.");
          typeThePassword();
          break;
        case "Strong":
          cy.log("Password strength is strong.");
          break;
      }
    });
};

export const createUserAccount = () => {
  sum.getInputTextbox(suSt.strings.FIRST_NAME).type("Sachin");
  sum.getInputTextbox(suSt.strings.LAST_NAME).type("Ade");
  sum.getInputTextbox(idPartialValues.EMAIL).type(`${Cypress.env("email")}`);
  sum.getInputTextbox(suSt.strings.PASSWORD).type("Sac");
  passwordStrengthScenarios();
  sum
    .getInputTextbox(idPartialValues.CONFIRM_PASSWORD)
    .type(`${Cypress.env("password")}`);
  cy.getText(spSe.selectors.CAA_TITLE, suSt.strings.CREATE_ACCOUNT).click();
};

export class signupMethods {
  getInputTextbox(idPartialValue: string) {
    return cy.get(`#${idPartialValue}`.toLowerCase().replace(" ", ""));
  }
}

export const sum = new signupMethods();
