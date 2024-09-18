Cypress.Commands.add(
  "getBoundingClientRect",
  { prevSubject: "element" },
  (subject) => {
    const domElement = subject[0] as HTMLElement;
    const rect = domElement.getBoundingClientRect();
    return cy.wrap({
      top: rect.top,
      left: rect.left,
      right: rect.right,
      bottom: rect.bottom,
      width: rect.width,
      height: rect.height,
    });
  },
);
