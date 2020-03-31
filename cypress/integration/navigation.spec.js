describe("Navigation", () => {
  it("should visit root", () => {
    cy.visit("/");
  });
  it("should visit Temperature sensors", () => {
    cy.visit("/");
    cy.contains("Temperature Sensors").first().click();
    cy.contains("Temperature ( \u00b0C )").should('exist')
  });
  it("should visit Humidity sensors", () => {
    cy.visit("/");
    cy.contains("Humidity Sensors").first().click();
    cy.contains("Humidity (%)").should('exist')
  });
  it("should show information on click", () => {
    cy.visit("/");
    cy.get("button.Info-button").first().click();
    cy.contains("Information:").should('exist')
  });
});