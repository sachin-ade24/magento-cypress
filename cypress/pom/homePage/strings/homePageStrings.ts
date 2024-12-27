export class homePageStrings {
  get strings() {
    return {
      HOME_PAGE_URL: `${Cypress.env("baseUrl")}`,
      SIGN_IN: "Sign In",
      CREATE_ACCOUNT: "Create an Account",
      HOME_PAGE_TITLE: "Home Page",
      H1_HEADER: "Create New Customer Account"
    };
  }
}

export const hpst = new homePageStrings();
