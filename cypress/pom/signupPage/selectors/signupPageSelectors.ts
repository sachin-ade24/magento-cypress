export class signupPageSelectors {
  get selectors() {
    return {
      MAIN_CONTENT: "#maincontent",
      CAA_TITLE: '[title="Create an Account"]',
      SUCCESS_MESSAGE: '[data-ui-id="message-success"]'
    };
  }
}

export const spSe = new signupPageSelectors();
