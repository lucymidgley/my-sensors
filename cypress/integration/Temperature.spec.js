describe("Temperature toggle", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Should change values from Celcius to Farenheit on click", () => {
    cy.visit("/");
    cy.contains("22.0\u00b0C").should("exist");
    cy.contains("71.6\u00b0F").should("not.exist");
    cy.get(".tempToggle")
      .get("input")
      .eq(1)
      .click();
    cy.contains("22.0\u00b0C").should("not.exist");
    cy.contains("71.6\u00b0F").should("exist");
  });
});
