export type ProductsTypes = {
  id_product: string;
  name: string;
  description: string;
  stock: number | null;
  price: number | null;
}

export type ProductsFormTypes = Omit<ProductsTypes, 'id_product'>;
