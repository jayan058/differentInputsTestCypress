Cypress.Commands.add("handleConfirm", (confirmAction) => {
  cy.on("window:confirm", (text) => {
    expect(text).to.equal("Press a button!");
    return confirmAction; // Press either the OK button or the Cancel button
  });
});

Cypress.Commands.add("triggerConfirmBox", () => {
  cy.get("button[onClick='myFunctionConfirm()']").click();
});
