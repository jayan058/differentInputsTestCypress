describe("Radio Button Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display radio buttons with correct labels", () => {
    cy.verifyRadioButtonLabel("male", "Male");
    cy.verifyRadioButtonLabel("female", "Female");
  });

  it("should select the male radio button and ensure only one is selected", () => {
    cy.checkRadioButton("gender", "male");
    cy.verifyOnlyOneRadioButtonSelected("gender", "male");
  });

  it("should select the female radio button and ensure only one is selected", () => {
    cy.checkRadioButton("gender", "female");
    cy.verifyOnlyOneRadioButtonSelected("gender", "female");
  });

  it("should allow only one radio button to be selected at a time", () => {
    cy.checkRadioButton("gender", "male");
    cy.verifyOnlyOneRadioButtonSelected("gender", "male");

    cy.checkRadioButton("gender", "female");
    cy.verifyOnlyOneRadioButtonSelected("gender", "female");
  });
});
