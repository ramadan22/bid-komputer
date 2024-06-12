import { useState } from 'react';
import { FormDataTypes } from '../types';

const UseFormData = () => {
  const defaultValue = {
    name: '',
    description: '',
    stock: null,
    price: null,
  };

  const [form, setForm] = useState<FormDataTypes>(defaultValue);

  return {
    form,
    setForm,
    defaultValue,
  };
};

export default UseFormData;
