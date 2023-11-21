/// <reference types="Cypress" />

beforeEach(() => {
  cy.login(Cypress.env('email'), Cypress.env('password'));
  cy.log("Logged in");
  cy.url().should('eq', 'https://ecomapmetamap.com/');
});

describe("Load a URL and Check an Element", () => {
  it("Visits the home page", () => {
    cy.visit("https://ecomapmetamap.com/");
    cy.contains('Welcome to Meta Map')
  });
  
  it("Visits the about page", () => {
    cy.visit("https://ecomapmetamap.com/about/");
    cy.contains('Tech For All')
  });
  
});
