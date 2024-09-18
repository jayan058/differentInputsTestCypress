describe("Testing the resizable elements", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("Testing the resizable elements", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("should click and drag the element by its right border and resize it", () => {
      cy.get(".ui-resizable").then(($element) => {
        const rect = $element[0].getBoundingClientRect();
        console.log("Initial Rect:", rect);
        cy.get(".ui-resizable-handle")
          .first()
          .then(($handle) => {
            const handleRect = $handle[0].getBoundingClientRect();
            const startX = handleRect.right;
            const startY = (handleRect.top + handleRect.height) / 2;
            const endX = startX + 100;
            const endY = startY;
            cy.wrap($handle)
              .trigger("mousedown", {
                button: 0,
                clientX: startX,
                clientY: startY,
              })
              .trigger("mousemove", { button: 0, clientX: endX, clientY: endY })
              .trigger("mouseup", { button: 0, clientX: endX, clientY: endY });
            cy.wrap($element).should(($el) => {
              const rectAfterResizing = $el[0].getBoundingClientRect();
              console.log("Resized Rect:", rectAfterResizing);
              expect(rectAfterResizing.width).to.be.greaterThan(rect.width);
              expect(rectAfterResizing.top).to.equal(startY);
            });
          });
      });
    });
  });
});
