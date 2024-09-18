import { Page } from "../../interfaces/productData";
Cypress.Commands.add("loadProductsData", () => {
  cy.fixture("products.json").then((data) => {
    return cy.wrap(data);
  });
});

Cypress.Commands.add("checkProductsData", (page: Page) => {
  cy.get(`#pagination li:nth-child(${page.pageNumber}) a`).click();
  cy.get("#productTable tbody tr").each((row, index) => {
    const product = page.products[index];
    cy.wrap(row).find("td").eq(0).should("have.text", product.id.toString());
    cy.wrap(row).find("td").eq(1).should("have.text", product.name);
    cy.wrap(row).find("td").eq(2).should("have.text", product.price);
  });
});
