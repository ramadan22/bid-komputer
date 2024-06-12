interface Diskon {
  value: string;
  item: string;
  diskonPrice: string;
}

export type CardProductProps = {
  title: string;
  price: string;
  image: string;
  diskon: Diskon | null;
}
