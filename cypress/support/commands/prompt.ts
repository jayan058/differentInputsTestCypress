// Command to stub the prompt and provide a return value
Cypress.Commands.add("stubPrompt", (returnValue) => {
  cy.window().then((win) => {
    cy.stub(win, "prompt").returns(returnValue);
  });
});

// Command to verify the text in the demo element
Cypress.Commands.add("verifyDemoText", (expectedText) => {
  cy.get("#demo").should("have.text", expectedText);
});
