export class homePage {
  visitUrl(url: string) {
    return cy.visit(url, { timeout: 60000 });
  }
}

export const hp = new homePage();
