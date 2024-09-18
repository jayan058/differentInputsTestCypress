Cypress.Commands.add("submitSearchQuery", (query: string) => {
  cy.get(".wikipedia-search-input").type(query);
  cy.get("input[type='submit']").click();
});

Cypress.Commands.add("validateTheResult", (query: string) => {
  cy.get(".wikipedia-search-results").each(($el) => {
    cy.wrap($el)
      .find("a")
      .each(($resultLink) => {
        cy.wrap($resultLink)
          .invoke("text")
          .then((resutText) => {
            expect(resutText).to.contain(query);
          });
      });
  });
});
Cypress.Commands.add("checkTheLink", (query: string) => {
  cy.intercept("GET", "https://en.wikipedia.org/w/index.php*").as(
    "wikipediaSearch",
  );
  cy.get("#Wikipedia1_wikipedia-search-more")
    .should("be.visible")
    .each(($el) => {
      cy.wrap($el)
        .find("a")
        .each(($showMore) => {
          cy.wrap($showMore)
            .invoke("attr", "href")
            .then((href) => {
              cy.visit(href);
              cy.wait("@wikipediaSearch").then((interception) => {
                expect(interception.request.url).to.contain(query);
              });
            });
        });
    });
});
