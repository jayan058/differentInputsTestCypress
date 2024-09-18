describe("Testing seach feature", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should give the correct result while searching", () => {
    cy.submitSearchQuery("Nepal");
    cy.get(".wikipedia-search-results-header").should("be.visible");
    cy.validateTheResult("Nepal");
    cy.checkTheLink("Nepal");
  });

  it("should give appropriate message when wrong query search is provided", () => {
    cy.submitSearchQuery("Wrong Query");
    cy.wait(1000);
    cy.get(".wikipedia-search-results").each(($el) => {
      cy.wrap($el)
        .invoke("text")
        .then((errorText) => {
          expect(errorText).to.equal("No results found.");
        });
    });
  });
  it("should give appropriate message when no query search is provided", () => {
    cy.submitSearchQuery(" ");
    cy.wait(1000);
    cy.get(".wikipedia-search-results").each(($el) => {
      cy.wrap($el)
        .invoke("text")
        .then((errorText) => {
          expect(errorText).to.equal("Please enter text to search.");
        });
    });
  });
});
