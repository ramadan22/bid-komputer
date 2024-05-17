import { ProductsFormTypes } from '@/services/cms/products/types';

export type FormDataTypes = ProductsFormTypes & {
  id?: string;
}

export type FormPropsTypes = {
  title: string;
  open: boolean;
  isLoadingSubmit?: boolean;
  data: object | null;
  handleOpen: (open: boolean) => void;
  handleSubmit: (form: FormDataTypes) => void;
}
