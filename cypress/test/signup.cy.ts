import { hpst } from "cypress/pom/homePage/strings/homePageStrings";
import {
  createUserAccount,
  verifiesData
} from "cypress/pom/signupPage/methods/methods";
import { spSe } from "cypress/pom/signupPage/selectors/signupPageSelectors";
import { suSt } from "cypress/pom/signupPage/strings/signupStrings";

describe("Signup", () => {
  it("Verifies the url and title of the home page", () => {
    cy.url().then((url) => {
      expect(url).to.be.equal(`${hpst.strings.HOME_PAGE_URL}/`);
    });
  });
  it("Verifies the title of the home page", () => {
    cy.title().then((title) => {
      expect(title).to.be.equal(hpst.strings.HOME_PAGE_TITLE);
    });
  });
  it(`Verifies and clicks on '${hpst.strings.CREATE_ACCOUNT}' and verifies the h1 header text`, () => {
    cy.getText("a", hpst.strings.CREATE_ACCOUNT).click();
    cy.url().then((url) => {
      expect(url).to.be.equal(
        `${hpst.strings.HOME_PAGE_URL}/customer/account/create/`
      );
    });
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
  it("Verifiy the success message", () => {
    cy.getText(
      spSe.selectors.SUCCESS_MESSAGE,
      suSt.strings.SUCCESS_MESSAGE_TEXT
    );
  });
});
