/// <reference types="Cypress" />

describe('test_name', function() {

    it('what_it_does', function() {
   
       cy.viewport(1512, 828)
    
       cy.visit('https://artistnav.org/onboard?step=1&redirect=https%3A%2F%2Fartistnav.org%2F')
    
       cy.get('.bubble-element:nth-child(10) > .bubble-element > .bubble-element > .bubble-element > .clickable-element:nth-child(2)').click()
    
       cy.get('.bubble-element:nth-child(14) > .bubble-element > .bubble-element > .bubble-element:nth-child(2) > .bubble-element:nth-child(2)').click()
    
       cy.get('.bubble-element:nth-child(14) > .bubble-element > .bubble-element > .bubble-element:nth-child(2) > .bubble-element:nth-child(2)').click()
    
       cy.get('.bubble-element:nth-child(14) > .bubble-element > .bubble-element > .bubble-element:nth-child(2) > .bubble-element:nth-child(2)').click()
    
       cy.get('.bubble-element:nth-child(14) > .bubble-element > .bubble-element > .bubble-element:nth-child(2) > .bubble-element:nth-child(2)').type('duncan')
    
       cy.get('.bubble-element:nth-child(14) > .bubble-element > .bubble-element > .bubble-element:nth-child(2) > .bubble-element:nth-child(2)').click()
    
       cy.get('.bubble-element:nth-child(14) > .bubble-element > .bubble-element > .bubble-element:nth-child(2) > .bubble-element:nth-child(2)').type('duncan@ecomap.tech')
    
       cy.get('.bubble-element > .bubble-element > .bubble-element > .bubble-element:nth-child(3) > .bubble-element:nth-child(3)').click()
    
       cy.get('.bubble-element:nth-child(14) > .bubble-element > .bubble-element > .bubble-element:nth-child(4) > .bubble-element:nth-child(2)').click()
    
       cy.get('.bubble-element:nth-child(14) > .bubble-element > .bubble-element > .bubble-element:nth-child(4) > .bubble-element:nth-child(2)').type('test123')
    
       cy.get('.bubble-element > .bubble-element > .bubble-element > .bubble-element:nth-child(4) > .clickable-element:nth-child(4)').click()
    
       cy.get('.bubble-element:nth-child(3) > .bubble-element > .bubble-element:nth-child(1) > .bubble-element > div').click()
    
       cy.visit('https://artistnav.org/')
    
       cy.get('.bubble-element:nth-child(3) > .bubble-element > .clickable-element:nth-child(2) > .bubble-element > div').click()
    
       cy.visit('https://artistnav.org/about')
    
    })
   
   })
   