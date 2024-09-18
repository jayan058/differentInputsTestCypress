describe("Alert Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should show an alert with the correct message", () => {
    cy.get("button[onClick='myFunctionAlert()']").click();
    cy.on("window:alert", (text) => {
      expect(text).to.equal("I am an alert box!");
    });
  });
});
