import { sum } from "cypress/pom/signupPage/methods/methods";
import { signIn } from "../enums/signInEnums";
import { siSt } from "../strings/signInStrings";
import { siSe } from "../selectors/signInSelectors";

export const completeTheSignIn = (email: string, password: string) => {
  sum.getInputTextbox(signIn.EMAIL).clear().type(email);
  sum.getInputTextbox(signIn.PASSWORD).clear().type(password);
  cy.getText("span", siSt.strings.SIGN_IN_BUTTON_TEXT).click();
};

export const verifyTheAlertMessage = () => {
  cy.getText(siSe.selectors.ALERT, siSt.strings.ALERT_MESSAGE).and(
    "have.css",
    "background-color"
  );
};
