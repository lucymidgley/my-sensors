describe("Sorting", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should sort words alphabetically", () => {
    cy.visit("/");
    cy.get("td")
      .first()
      .contains("Living Room Thermostat")
      .should("exist");
    cy.get("thead")
      .find("th")
      .eq(1)
      .click();
    cy.get("td")
      .first()
      .contains("Garage Thermostat")
      .should("exist");
  });
  it("should sort times chronologically descending then ascending", () => {
    cy.visit("/");
    cy.get("thead")
      .find("th")
      .eq(2)
      .click();
    cy.get("td")
      .eq(1)
      .contains("2019 Dec 31 17:00")
      .should("exist");
    cy.get("thead")
      .find("th")
      .eq(2)
      .click();
    cy.get("td")
      .eq(1)
      .contains("2020 Jan 01 11:22")
      .should("exist");
  });
  it("should sort numbers numerically descending then ascending", () => {
    cy.visit("/");
    cy.get("thead")
      .find("th")
      .eq(3)
      .click();
    cy.get("td")
      .eq(2)
      .contains("17.9\u00b0C")
      .should("exist");
    cy.get("thead")
      .find("th")
      .eq(3)
      .click();
    cy.get("td")
      .eq(2)
      .contains("35.4%")
      .should("exist");
  });
});
