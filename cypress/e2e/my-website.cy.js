/// <reference types="Cypress" />

describe('test_name', function() {

    it('what_it_does', function() {
   
       cy.viewport(1512, 828)
    
       cy.visit('https://duncanwoodpro.netlify.app/')
    
       cy.get('.relative > .flex-1 > .hidden > .flex > .cursor-pointer:nth-child(1)').click()
    
       cy.get('.relative > .flex-1 > .hidden > .flex > .cursor-pointer:nth-child(2)').click()
    
       cy.get('.relative > .flex-1 > .hidden > .flex > .cursor-pointer:nth-child(3)').click()
    
       cy.get('.relative > .flex-1 > .hidden > .flex > .cursor-pointer:nth-child(4)').click()
    
       cy.get('.relative > .flex-1 > .hidden > .flex > .cursor-pointer:nth-child(5)').click()
    
       cy.get('.relative > .flex-1 > .hidden > .flex > .cursor-pointer:nth-child(6)').click()
    
       cy.visit('https://docs.google.com/document/d/1S1OmTFn_FNE7jcgu3MyRMuzcYBRcIsjW/edit')
    
    })
   
   })
   