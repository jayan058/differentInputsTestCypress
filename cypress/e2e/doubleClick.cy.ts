describe("Testing double click", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Copies the text from field1 to field2", () => {
    cy.get("button").each(($el) => {
      cy.wrap($el)
        .invoke("text")
        .then((text) => {
          if (text.trim() === "Copy Text") {
            cy.wrap($el).dblclick();
            cy.get("input[value='Hello World!']")
              .invoke("val")
              .then((textToCopy) => {
                cy.get("#field2").invoke("val").should("equal", textToCopy);
              });
          }
        });
    });
  });
});
