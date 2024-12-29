import { hp } from "cypress/pom/homePage/methods/methods";
import "./commands";
import { hpst } from "cypress/pom/homePage/strings/homePageStrings";
import { signOff } from "cypress/pom/signInPage/methods/methods";

before(() => {
  hp.visitUrl(hpst.strings.HOME_PAGE_URL);
});

after(() => {
  signOff();
});
