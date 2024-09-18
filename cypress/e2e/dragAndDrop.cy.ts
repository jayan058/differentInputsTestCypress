//To handle the drag and drop we need a new package cypress-drag-drop

describe("Testing drag and drop", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should handle the drag and drop correctly and also show a message when the dragged element is dropped", () => {
    cy.get(".ui-draggable").drag(".ui-droppable", { force: true });
    cy.get(".ui-droppable").each(($el) => {
      cy.wrap($el)
        .find("p")
        .invoke("text")
        .then((textAfterDropped) => {
          expect(textAfterDropped).to.equal("Dropped!");
        });
    });
  });
});
