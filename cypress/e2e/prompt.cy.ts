describe("Prompt Test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should enter a name in the prompt", () => {
    // Stub the prompt to simulate entering a name
    cy.stubPrompt("John Doe");
    cy.get("button[onClick='myFunctionPrompt()']").click();
    cy.verifyDemoText("Hello John Doe! How are you today?");
  });

  it("should cancel the prompt", () => {
    // Stub the prompt to simulate canceling
    cy.stubPrompt(null);
    cy.get("button[onClick='myFunctionPrompt()']").click();
    cy.verifyDemoText("User cancelled the prompt.");
  });
});
