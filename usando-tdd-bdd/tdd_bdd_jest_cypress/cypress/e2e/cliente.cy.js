/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
  
    it('ao acessar a home, deve conter uma lista com 10 clientes', () => {

      cy.get('tbody tr').should('to.have.length', 10)
    })
})
  