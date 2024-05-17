import { MetaTypes } from '@/types/serviceApi';

export type TableHeaderField = {
  key: string;
  header: string;
}

export type PropsTypes = {
  headers: TableHeaderField[] | [];
  data: Array[] | undefined;
  handleDelete?: (value: string | null) => void;
  handleChangeParams?: (key: string, value: string | number) => void
  handleButtonAdd?: () => void;
  meta?: MetaTypes;
  handleButtonAction?: (
    value: 'add' | 'edit' | null,
    id: string | number | null
  ) => void;
}
