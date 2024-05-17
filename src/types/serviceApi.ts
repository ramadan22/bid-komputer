/* eslint-disable @typescript-eslint/no-explicit-any */

export type PaginationParamsTypes = {
  page?: number | null;
  size?: number | null;
  keyword?: string;
}

export type MetaTypes = {
  page?: number;
  size?: number;
  total?: number;
}

export type ResponseApiTypes<T = any> = {
  status: number;
  message: string;
  messageUser: string | null;
  data?: T extends undefined ? never : T;
  meta?: MetaTypes;
};
