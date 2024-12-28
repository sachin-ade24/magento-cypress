export class signInPageSelectors {
  get selectors() {
    return {
      ALERT: '[role="alert"]',
      EMAIL_ERROR: "#email-error",
      CUSTOMER_NAME: "span.customer-name",
      DD_BUTTON: "button.switch"
    };
  }
}

export const siSe = new signInPageSelectors();
