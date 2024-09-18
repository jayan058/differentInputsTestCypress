Cypress.Commands.add("checkRadioButton", (name, value) => {
  cy.get(`input[name="${name}"][value="${value}"]`)
    .check()
    .should("be.checked");
});

Cypress.Commands.add("uncheckRadioButton", (name, value) => {
  cy.get(`input[name="${name}"][value="${value}"]`)
    .uncheck()
    .should("not.be.checked");
});

Cypress.Commands.add("verifyRadioButtonLabel", (value, expectedLabel) => {
  cy.get(`input[name="gender"][value="${value}"]`)
    .should("be.visible")
    .should("have.value", value);
  cy.get(`label[for="${value}"]`).should("have.text", expectedLabel);
});

Cypress.Commands.add(
  "verifyOnlyOneRadioButtonSelected",
  (name, selectedValue) => {
    cy.get(`input[name="${name}"][value="${selectedValue}"]`).should(
      "be.checked",
    );
    cy.get(`input[name="${name}"]`)
      .not(`[value="${selectedValue}"]`)
      .should("not.be.checked");
  },
);
