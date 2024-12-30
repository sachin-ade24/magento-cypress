/*We can keep these strings in relevant 'methods' file*/

export class signInPageStrings {
  get strings() {
    return {
      SIGN_IN_BUTTON_TEXT: "Sign In",
      ALERT_MESSAGE:
        "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.",
      ERROR_MESSAGE_TEXT: "This is a required field.",
      ENTER_VALID_EMAIL_WARNING:
        "Please enter a valid email address (Ex: johndoe@domain.com).",
      HP: "Home Page",
      SIGN_OUT: "Sign Out",
      SIGN_OUT_MESSAGE: "You are signed out"
    };
  }
}

export const siSt = new signInPageStrings();
