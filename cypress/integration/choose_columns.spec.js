describe("Column choosing", () => {
  beforeEach(() => {
    cy.visit("/")
  })
  it("should be able to choose not to render certain columns", () => {
    cy.visit("/");
    cy.contains("Garage Thermostat").should('exist')
    cy.contains("All Sensors").should('exist')
    cy.contains("Name").first().click()
    cy.contains("Garage Thermostat").should('not.exist')
    cy.contains("Time").first().click()
    cy.contains("Value").first().click()
    cy.contains("All Sensors").should('not.exist')
  });
});