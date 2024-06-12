import { useState } from 'react';

const UseProductsHooks = () => {
  const tableHeaders = [
    {
      key: 'id_product',
      header: 'ID',
    },
    {
      key: 'name',
      header: 'Name',
    },
    {
      key: 'description',
      header: 'Description',
    },
    {
      key: 'stock',
      header: 'Stock',
    },
    {
      key: 'priceFormatRupiah',
      header: 'Price',
    },
  ];

  const [deleteId, setDeleteId] = useState('');
  const [formType, setFormType] = useState<{value:'add' | 'edit' | null, id: string | number | null} | null>(null);

  return {
    deleteId,
    setDeleteId,
    formType,
    setFormType,
    tableHeaders
  };
};

export default UseProductsHooks;
