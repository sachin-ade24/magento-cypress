import { hp } from "cypress/pom/homePage/methods/methods";
import "./commands";
import { hpst } from "cypress/pom/homePage/strings/homePageStrings";

export const visitTheHomePage = () => {
  hp.visitUrl(hpst.strings.HOME_PAGE_URL);
};

before(() => {
  visitTheHomePage();
});
