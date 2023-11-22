/// reference types="Cypress" />

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

  // The organizations pages are not working. They are redirecting to different pages

  it("Visits the organizations page", () => {

    cy.visit("/organizations");
    // cy.get('[id=topGroup').contains('Organizations')
    cy.contains('Add Organization')
  });

  it("Visits the organizations - service providers page", () => {
    // cy.clearAllCookies()
    cy.visit("/organizations/resource-providers");
    cy.contains('Add Service Providers')
  });

  it("Visits the organizations - resource providers page", () => {
    // cy.clearAllCookies()
    cy.visit("/organizations/resource-providers");
    cy.contains('Add Organization')
  });

  it("Visits the organizations - businesses page", () => {
    // cy.clearAllCookies()
    cy.visit("/organizations/businesses");
    cy.contains('Add Organization')
  });


  // The advertise page appears to be deprecated on the Metamap
  // it("Visits the advertise page", () => {
  //   cy.clearAllCookies()
  //   cy.visit("/advertise");
  //   cy.contains('404')
  // });
  
});

//test 