/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

beforeEach(() => {
  cy.login(Cypress.env('email'), Cypress.env('password'));
  cy.log("Logged in");
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
  
  it("Visits the organizations page", () => {
    cy.visit("https://ecomapmetamap.com/organizations");
    cy.contains('Add Organization')
  });

  it("Visits the organizations - service providers page", () => {
    cy.visit("https://ecomapmetamap.com/organizations/service-providers");
    cy.contains('Add Service Provider')
  });

  it("Visits the organizations - resource providers page", () => {
    cy.visit("https://ecomapmetamap.com/organizations/resource-providers");
    cy.contains('Add Organization')
  });

  it("Visits the organizations - businesses page", () => {
    cy.visit("https://ecomapmetamap.com/organizations/businesses");
    cy.contains('Add Organization')
  });


  // The advertise page appears to be deprecated on the Metamap
  // it("Visits the advertise page", () => {
  //   cy.clearAllCookies()
  //   cy.visit("/advertise");
  //   cy.contains('404')
  // });
  
});
