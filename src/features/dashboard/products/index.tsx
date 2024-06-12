'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

import ModalDialogDeleteUI from '@/ui/modal-dialog/modalDialogDelete';
import TableDataUI from '@/ui/table-data';
import FormFeature from './form';
import UseProductsHooks from './hooks';
import {
  deleteProductsData, getProductsData, postProductsData, putProductsData
} from './hooks/useProductsData';

interface ParamsTypes {
  page: number | null;
  size: number | null;
  keyword?: string;
}

interface Props {
  params: ParamsTypes
}

const ProductsFeature = ({ params }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const {
    deleteId,
    setDeleteId,
    tableHeaders,
    setFormType,
    formType
  } = UseProductsHooks();

  const { data: products, refetch } = getProductsData(params);

  const { mutate: deleteProduct, isSuccess: successDelete } = deleteProductsData();
  const { mutate: putProduct, isSuccess: successPut, isPending: pendingPut } = putProductsData();

  const {
    mutate: postProduct,
    isSuccess: successPost,
    isPending: pendingPost,
  } = postProductsData();

  useEffect(() => {
    if (successDelete) {
      setDeleteId('');
      refetch();
    }
  }, [successDelete]);

  useEffect(() => {
    if (successPost || successPut) {
      setFormType(null);
      refetch();
    }
  }, [successPost, successPut]);

  return (
    <div className="absolute inset-0 p-6">
      <TableDataUI
        headers={tableHeaders}
        data={products?.data || []}
        meta={products?.meta}
        handleDelete={(id) => setDeleteId(id || '')}
        handleButtonAction={(value, id) => setFormType({ value, id })}
        handleChangeParams={(key, value) => {
          const updateParams = {
            ...params,
            [key]: value,
          };

          router.push(`${pathname}?page=${updateParams.page}&size=${updateParams.size}${updateParams.keyword ? `&keyword=${updateParams.keyword}` : ''}`);
        }}
      />
      {!!formType && (
        <FormFeature
          open={!!formType}
          handleOpen={() => setFormType(null)}
          isLoadingSubmit={pendingPost || pendingPut}
          handleSubmit={(form) => {
            if (formType.id) putProduct({ id: formType.id, params: form });
            if (!formType.id) postProduct(form);
          }}
          title={`Form ${(formType.value === 'add' && 'Add') || (formType.value === 'edit' && 'Edit')}`}
          data={
            (!!formType.id && products?.data?.find((item) => item.id_product === formType.id))
            || null
          }
        />
      )}
      {!!deleteId && (
        <ModalDialogDeleteUI
          open={!!deleteId}
          handleOpen={() => setDeleteId('')}
          description={`Make sure you don${'\''}t delete the wrong data`}
          title="Are you sure you want to delete data?"
          handleTrigger={(value) => {
            if (value) deleteProduct(deleteId);
            if (!value) setDeleteId('');
          }}
        />
      )}
    </div>
  );
};

export default ProductsFeature;
