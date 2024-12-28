import { hp } from "cypress/pom/homePage/methods/methods";
import "./commands";
import { hpst } from "cypress/pom/homePage/strings/homePageStrings";
import { siSe } from "cypress/pom/signInPage/selectors/signInSelectors";
import { siSt } from "cypress/pom/signInPage/strings/signInStrings";

export const visitTheHomePage = () => {
  hp.visitUrl(hpst.strings.HOME_PAGE_URL);
};

export const signOut = () => {
  cy.get(siSe.selectors.CUSTOMER_NAME)
    .first()
    .find(siSe.selectors.DD_BUTTON)
    .click();
  cy.getText("a", siSt.strings.SIGN_OUT).click();
  cy.getText("span", siSt.strings.SIGN_OUT_MESSAGE);
  cy.getText("span", siSt.strings.HP);
};

before(() => {
  visitTheHomePage();
});

after(() => {
  signOut();
});
