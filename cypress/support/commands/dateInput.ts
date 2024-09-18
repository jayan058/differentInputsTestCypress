Cypress.Commands.add(
  "selectDateFromTextInput",
  (selector: string, date: string) => {
    cy.get(selector)
      .clear()
      .type(date + "{enter}")
      .should("have.value", date);
  },
);

Cypress.Commands.add(
  "verifyDateInTextInput",
  (selector: string, expectedDate: string) => {
    cy.get(selector).should("have.value", expectedDate);
  },
);
