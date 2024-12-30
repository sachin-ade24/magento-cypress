/*We can keep these strings in relevant 'methods' file*/

export class signupStrings {
  get strings() {
    return {
      JSON_PATH: `${Cypress.env("jsonPath")}`,
      FIRST_NAME: "First Name",
      LAST_NAME: "Last Name",
      PASSWORD: "Password",
      CREATE_ACCOUNT: "Create an Account",
      SUCCESS_MESSAGE_TEXT: "Thank you for registering with Main Website Store."
    };
  }
}

export const suSt = new signupStrings();
