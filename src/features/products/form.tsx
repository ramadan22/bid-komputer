import { useEffect } from 'react';

import Button from '@/components/button';
import {
  Dialog, DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/dialog';
import Input from '@/components/input';
import Label from '@/components/label';
import { formatRupiah } from '@/helpers/formatter';
import { numericInitiate, removeNonDigits } from '@/helpers/inputHelper';
import UseFormData from './hooks/formData';
import { FormDataTypes, FormPropsTypes } from './types';

const FormFeature = ({
  title, open, handleOpen, handleSubmit, data, isLoadingSubmit,
}: FormPropsTypes) => {
  const { form, setForm, defaultValue } = UseFormData();

  useEffect(() => setForm(data ? { ...data } as FormDataTypes : defaultValue), [data]);

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        if (!value) setForm(defaultValue);
        handleOpen(value);
      }}
    >
      <DialogContent className="bg-white custom-animation-[slide_vertical_-25] !animation-duration-[0.5s]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <form
          className="flex flex-col gap-y-3 [&>div>label]:text-[#666666]"
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit(form);
          }}
        >
          <div className="flex flex-col gap-y-2.5 mt-5">
            <Label>Name</Label>
            <Input
              value={form.name}
              placeholder="Enter Product Name"
              className="h-12"
              onChange={(event) => setForm({ ...form, name: event?.target.value })}
            />
          </div>
          <div className="flex flex-col gap-y-2.5 mt-5">
            <Label>Description</Label>
            <Input
              value={form.description}
              placeholder="Enter Product Description"
              className="h-12"
              onChange={(event) => setForm({ ...form, description: event?.target.value })}
            />
          </div>
          <div className="flex flex-col gap-y-2.5 mt-5">
            <Label>Stock</Label>
            <Input
              // type="number"
              value={form.stock || 0}
              placeholder="Enter Product Stock"
              className="h-12"
              onChange={(event) => {
                setForm({
                  ...form,
                  stock: Number(numericInitiate(event?.target.value)),
                });
              }}
            />
          </div>
          <div className="flex flex-col gap-y-2.5 mt-5">
            <Label>Price</Label>
            <div className="flex gap-x-2 items-center border shadow-sm rounded pl-3 pr-2">
              <Label className="text-base">Rp</Label>
              <Input
                // type="number"
                value={formatRupiah(Number(form.price)) || 0}
                placeholder="Enter Product Price"
                className="h-12 flex-1 border-0 shadow-none rounded-none p-0"
                onChange={(event) => {
                  setForm({
                    ...form, price: Number(removeNonDigits(numericInitiate(event?.target.value)))
                  });
                }}
              />
            </div>
          </div>
          <div className="flex gap-x-2.5 justify-end mt-5 [&>button]:w-24">
            <Button onClick={() => {}}>Close</Button>
            <Button
              type="submit"
              className="bg-green-500 text-white"
              disabled={isLoadingSubmit}
            >
              {isLoadingSubmit ? (
                <span>Loading...</span>
              ) : (
                <span>Submit</span>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FormFeature;
