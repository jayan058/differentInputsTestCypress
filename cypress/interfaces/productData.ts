interface Product {
  id: number;
  name: string;
  price: string;
}

export interface Page {
  pageNumber: number;
  products: Product[];
}
