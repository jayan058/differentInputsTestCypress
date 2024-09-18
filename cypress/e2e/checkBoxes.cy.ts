describe("Checkbox Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display all checkboxes with correct labels", () => {
    cy.fixture("checkBoxes.json").then(({ checkboxes }) => {
      checkboxes.forEach(({ value, label }) => {
        cy.get(`input[type="checkbox"][value="${value}"]`).should("be.visible");
        cy.get(`label[for="${value}"]`).should("have.text", label);
      });
    });
  });

  it("should allow selecting and unselecting checkboxes", () => {
    cy.fixture("checkBoxes.json").then(({ checkboxes }) => {
      // Select all checkboxes
      cy.checkUncheckCheckboxes(checkboxes, true);
      // Unselect all checkboxes
      cy.checkUncheckCheckboxes(checkboxes, false);
    });
  });

  it("should allow selecting and unselecting individual checkboxes", () => {
    cy.fixture("checkBoxes.json").then(
      ({ checkboxesToCheck, checkboxesToUncheck, checkboxes }) => {
        cy.checkUncheckCheckboxes(checkboxesToCheck, true);
        const remainingCheckboxes = [];
        checkboxes.forEach((checkBox) => {
          let shouldInclude = true;
          checkboxesToCheck.forEach((checkBoxToCheck) => {
            if (checkBox.value === checkBoxToCheck.value) {
              shouldInclude = false;
            }
          });
          if (shouldInclude) {
            remainingCheckboxes.push(checkBox);
          }
        });
        remainingCheckboxes.forEach(({ value }) => {
          cy.get(`input[type="checkbox"][value="${value}"]`).should(
            "not.be.checked",
          );
        });
      },
    );
  });
});
