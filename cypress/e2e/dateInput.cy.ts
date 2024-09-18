describe("Date Picker Input Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display the date picker input", () => {
    cy.get("#datepicker").should("be.visible");
  });

  it("should allow a user to select a date", () => {
    const date = "09/15/2024";
    cy.selectDateFromTextInput("#datepicker", date);
    cy.verifyDateInTextInput("#datepicker", date);
  });
});
