import { formatRupiah } from '@/helpers/formatter';
import AxiosInstance from '@/lib/axios';
import { PaginationParamsTypes, ResponseApiTypes } from '@/types/serviceApi';
import { ProductsFormTypes, ProductsTypes } from './types';

const queries = {
  GET_PRODUCTS: 'GET_PRODUCTS',
};

const getProducts = (
  params: PaginationParamsTypes = {}
): Promise<ResponseApiTypes<(ProductsTypes & { priceFormatRupiah?: string })[]>> => new Promise((
  resolve,
  reject,
) => {
  AxiosInstance.get('/cms/products', {
    params
  })
    .then((response) => {
      const mapped = response?.data?.data.map((item: ProductsTypes) => ({
        ...item,
        priceFormatRupiah: `Rp ${formatRupiah(item?.price || 0)}`,
      }));

      resolve({
        ...response?.data,
        data: mapped,
      });
    })
    .catch((error) => reject(error));
});

const postProducts = (
  params: ProductsFormTypes,
): Promise<ResponseApiTypes<ProductsTypes>> => AxiosInstance.post('/cms/products', params)
  .then((response) => response?.data || null);

const putProducts = ({
  id,
  params
}: {
  id: string | number,
  params: ProductsFormTypes
}): Promise<ResponseApiTypes<ProductsTypes>> => AxiosInstance.put(`/cms/products/${id}`, params)
  .then((response) => response?.data || null);

const deleteProducts = (
  id: string
): Promise<ResponseApiTypes> => AxiosInstance.delete(`/cms/products/${id}`)
  .then((response) => response?.data || null);

export {
  deleteProducts, getProducts, postProducts, putProducts, queries
};
