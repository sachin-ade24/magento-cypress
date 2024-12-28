import { hp } from "cypress/pom/homePage/methods/methods";
import { hpst } from "cypress/pom/homePage/strings/homePageStrings";
import {
  createUserAccount,
  verifiesData
} from "cypress/pom/signupPage/methods/methods";
import { spSe } from "cypress/pom/signupPage/selectors/signupPageSelectors";
import { suSt } from "cypress/pom/signupPage/strings/signupStrings";

describe("Signup", () => {
  it("Verifies the url", () => {
    hp.verifyUrl(`${hpst.strings.HOME_PAGE_URL}/`);
  });

  it("Verifies the title of the home page", () => {
    hp.verifyTitle(hpst.strings.HOME_PAGE_TITLE);
  });

  it(`Verifies & clicks on '${hpst.strings.CREATE_ACCOUNT}' and verifies the h1 header text`, () => {
    cy.getText("a", hpst.strings.CREATE_ACCOUNT).click();
    hp.verifyUrl(`${hpst.strings.HOME_PAGE_URL}/customer/account/create/`);
    cy.get(spSe.selectors.MAIN_CONTENT).within(() => {
      cy.getText("h1", hpst.strings.H1_HEADER);
    });
  });

  it("Verifies the various fields text data", () => {
    verifiesData();
    cy.scrollTo("top");
  });

  it("Completes the signup process", () => {
    createUserAccount();
  });

  it("Verifiy the success message and sign out", () => {
    cy.getText(
      spSe.selectors.SUCCESS_MESSAGE,
      suSt.strings.SUCCESS_MESSAGE_TEXT
    ).and("have.css", "color", "rgb(0, 100, 0)");
  });
});
