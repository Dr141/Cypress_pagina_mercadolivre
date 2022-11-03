/// <reference types="Cypress" />

describe('Mercado Livre', () => {
  
  beforeEach(() => {
    cy.visit('https://www.mercadolivre.com.br/')
  })

  it('Verificar o titulo da pagina', () => {
    cy.title().should('be.equal', 'BLACK FRIDAY 2022 A partir de Outubro! No Mercado Livre')
  })

  it('Confirma uso de cookies', ()=> {
    cy.get('[data-testid="action:understood-button"]').click();
  })
})