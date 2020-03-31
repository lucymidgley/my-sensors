describe("Filtering", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should filter results based on name correctly", () => {
    cy.visit("/");
    cy.contains("Garage Thermostat").should("exist");
    cy.get("div.searchBox")
      .eq(1)
      .click()
      .type("Living");
    cy.contains("Garage Thermostat").should("not.exist");
    cy.get("tbody")
      .find("tr")
      .its("length")
      .should("eq", 6);
  });
});
