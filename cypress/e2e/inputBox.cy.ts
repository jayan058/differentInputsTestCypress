describe("Testing the input box", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Fills the form elements", () => {
    cy.get("#name").type("John Doe");
    cy.get("#email").type("john@example.com");
    cy.get("#phone").type("1234567890");
    cy.get("#textarea").type("123 Cypress St");
  });
});
