Cypress.Commands.add(
  "checkUncheckCheckboxes",
  (checkboxes, shouldCheck = true) => {
    checkboxes.forEach(({ value }) => {
      const checkbox = `input[type="checkbox"][value="${value}"]`;
      if (shouldCheck) {
        cy.get(checkbox).check().should("be.checked");
      } else {
        cy.get(checkbox).uncheck().should("not.be.checked");
      }
    });
  },
);
