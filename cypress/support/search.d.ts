declare namespace Cypress {
  interface Product {
    id: number;
    name: string;
    price: string;
  }

  interface Page {
    pageNumber: number;
    products: Product[];
  }

  export interface ProductsData {
    pages: Page[];
  }

  interface Chainable {
    submitSearchQuery(query: string): Chainable<Element>;
    checkTheLink(query: string): Chainable<Element>;
    validateTheResult(query: string): Chainable<Element>;
    drag(selector: string): Chainable<Element>;
    checkProductsData(page: Page): Chainable<void>;
    checkUncheckCheckboxes(checkBoxes, shouldCheck: boolean): Chainable<void>;
    getBoundingClientRect(): Chainable<{
      top: number;
      left: number;
      right: number;
      bottom: number;
      width: number;
      height: number;
    }>;
    loadProductsData(): Chainable<ProductsData>;
    checkRadioButton(name: string, vaue: string): Chainable<ProductsData>;
    uncheckRadioButton(name: string, vaue: string): Chainable<ProductsData>;

    verifyRadioButtonLabel(
      value: string,
      expectedLabel: string,
    ): Chainable<ProductsData>;

    verifyOnlyOneRadioButtonSelected(
      name: string,
      selectedValue: string,
    ): Chainable<ProductsData>;
    selectDateFromTextInput(selector: string, date: string): Chainable<Element>;
    verifyDateInTextInput(
      selector: string,
      expectedDate: string,
    ): Chainable<Element>;
    triggerConfirmBox(): Chainable<ProductsData>;
    handleConfirm(confirmAction: boolean): Chainable<ProductsData>;
    stubPrompt(returnValue: string): Chainable<ProductsData>;
    verifyDemoText(expectedText: string): Chainable<ProductsData>;
  }
}
