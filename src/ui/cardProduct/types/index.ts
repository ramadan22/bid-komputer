interface Diskon {
  value: string;
  item: string;
  diskonPrice: string;
}

export interface CardProductProps {
  title: string;
  price: string;
  image: string;
  diskon: Diskon | null;
}
