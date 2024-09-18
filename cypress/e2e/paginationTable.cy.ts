describe("Table Pagination Tests with Fixture Data", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display the correct products for each page", () => {
    cy.loadProductsData().then((data) => {
      data.pages.forEach((page) => {
        cy.checkProductsData(page);
        cy.get(`#pagination li:nth-child(${page.pageNumber}) a`).should(
          "have.class",
          "active",
        );
        cy.get(" #pagination li a").each(
          ($otherPagesButton, otherButtonIndex) => {
            if (otherButtonIndex + 1 != page.pageNumber) {
              cy.wrap($otherPagesButton).should("not.have.class", "active");
            }
          },
        );
      });
    });
  });
});
