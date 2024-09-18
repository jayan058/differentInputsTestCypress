describe("Slider Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should have the slider handle at the initial position", () => {
    cy.fixture("slider.json").then((data) => {
      cy.get("#slider .ui-slider-handle").should(
        "have.css",
        "left",
        data.initialPosition,
      );
    });
  });

  it("should move the slider handle correctly", () => {
    cy.fixture("slider.json").then((data) => {
      cy.get("#slider .ui-slider-handle").trigger("mousedown", {
        which: 1,
        pageX: 0,
      });
      cy.get("#slider").trigger("mousemove", { pageX: data.dragPageX });
      cy.get("body").trigger("mouseup", { force: true }); // Release the mouse button
      cy.get("#slider .ui-slider-handle").should(
        "have.css",
        "left",
        data.newSliderPosition,
      );
    });
  });
});
