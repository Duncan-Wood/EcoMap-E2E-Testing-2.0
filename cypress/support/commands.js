// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (email, password) => 
{
    cy.session([email, password], () => 
    {
    cy.visit('https://ecomapmetamap.com/');
    cy.contains('Log In').click();
    cy.contains("Don't have an account?").should('be.visible');
    cy.get('input[placeholder="Email*"]').type(email);
    cy.contains('Use Password').click();
    cy.get('input[placeholder="Password*"]').type(password);
    cy.contains('Log in').click({ force: true });
    },
    {
        cacheAcrossSpecs: true
    }
    )
});