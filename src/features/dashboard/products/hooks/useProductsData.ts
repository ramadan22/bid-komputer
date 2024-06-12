import { useMutation, useQuery } from '@tanstack/react-query';

import { ErrorConvertToMessage } from '@/helpers/handleResponseError';
import { messageError, messageSuccess } from '@/lib/react-toastify';
import {
  deleteProducts, getProducts,
  postProducts,
  putProducts,
  queries
} from '@/services/cms/products';
import { PaginationParamsTypes } from '@/types/serviceApi';

export const postProductsData = () => useMutation({
  mutationFn: postProducts,
  onError: (error) => {
    messageError(ErrorConvertToMessage(error));
  },
  onSuccess: (res) => {
    messageSuccess(res.message);
  }
});

export const getProductsData = (params: PaginationParamsTypes = {}) => useQuery({
  queryKey: [queries.GET_PRODUCTS, params],
  queryFn: () => getProducts(params),
});

export const deleteProductsData = () => useMutation({
  mutationFn: deleteProducts,
  onError: (error) => {
    messageError(ErrorConvertToMessage(error));
  },
  onSuccess: (res) => {
    messageSuccess(res.message);
  }
});

export const putProductsData = () => useMutation({
  mutationFn: putProducts,
  onError: (error) => {
    messageError(ErrorConvertToMessage(error));
  },
  onSuccess: (res) => {
    messageSuccess(res.message);
  }
});
