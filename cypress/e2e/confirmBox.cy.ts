describe("Confirm Box Test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should show confirm box and click OK", () => {
    cy.handleConfirm(true);
    cy.triggerConfirmBox();
    cy.get("#demo").should("have.text", "You pressed OK!");
  });

  it("should show confirm box and click Cancel", () => {
    cy.handleConfirm(false);
    cy.triggerConfirmBox();
    cy.get("#demo").should("have.text", "You pressed Cancel!");
  });
});
