describe('template spec', () => {
  beforeEach(()=>{
    cy.visit('/')
  })
  it('should increment', () => {
    cy.get('[data-testid="value"]').contains("Current Count: 0")

    cy.get('app-counter > :nth-child(1)').click()

    cy.get('[data-testid="value"]').contains("Current Count: 1")
  })

  it('should decrement', () => {
    cy.get('[data-testid="value"]').contains("Current Count: 0")

    cy.get('app-counter > :nth-child(2)').click()

    cy.get('[data-testid="value"]').contains("Current Count: -1")
  })
})
