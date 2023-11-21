/// <reference types="Cypress" />

beforeEach(() => {
    cy.login(Cypress.env('email'), Cypress.env('password'));
    cy.log("Logged in");
});

describe("Explore the Metamap", () => {
  it("Does not do much!", () => {
    expect(true).to.equal(true);
  });
});
