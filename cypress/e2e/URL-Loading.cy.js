/// <reference types="Cypress" />

beforeEach(() => {
    cy.login(Cypress.env('email'), Cypress.env('password'));
    cy.log("Logged in");
});

describe("Load a URL and Check an Element", () => {
  it("", () => {
    cy.visit("https://ecomapmetamap.com/");
    cy.get('Welcome').should("be.visible");
  });
});
