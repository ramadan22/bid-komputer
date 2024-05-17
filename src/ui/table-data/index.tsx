'use client';

/* eslint-disable react/no-array-index-key */

import { useEffect, useState } from 'react';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { GrTableAdd } from 'react-icons/gr';

import Button from '@/components/button';
import Input from '@/components/input';
import Label from '@/components/label';
import Pagination from '@/components/pagination';
import {
  Table, TableBody,
  TableCell,
  TableHead,
  TableHeader, TableRow
} from '@/components/table';
import useDebounce from '@/helpers/inputDebounce';
import { PropsTypes } from './TableData';

const TableDataUI = ({
  headers,
  data,
  meta,
  handleDelete,
  handleButtonAction,
  handleChangeParams,
}: PropsTypes) => {
  const [keyword, setKeyword] = useState('');

  const debouncedSearch = useDebounce<string>(keyword, 500);

  useEffect(() => {
    if (handleChangeParams) handleChangeParams('keyword', debouncedSearch);
  }, [debouncedSearch]);

  return (
    <div className="flex flex-col h-[calc(100vh-4rem-3rem)]">
      <div className="flex items-center mb-5">
        <div className="flex items-center basis-1/2 gap-x-5">
          <Input
            type="text"
            iconType="Search"
            iconDirection="left"
            placeholder="Search..."
            onChange={(event) => setKeyword(event?.target.value)}
          />
        </div>
        {/* {handleButtonAdd && ( */}
        <div className="flex basis-1/2 justify-end">
          <Button onClick={() => { if (handleButtonAction) handleButtonAction('add', null); }}>
            Add Data
          </Button>
        </div>
        {/* )} */}
      </div>
      <Table classWrapper="flex-1">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[60px] text-center">No</TableHead>
            {headers.filter((item) => item.header !== 'ID').map((item) => (
              <TableHead key={item.key}>{item.header}</TableHead>
            ))}
            <TableHead className="text-center w-[100px]">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {(data?.length || 0) > 0 && data?.map((item, idx: number) => (
            <TableRow key={idx} className="odd:bg-[#f7f6fe]">
              <TableCell className="w-[60px] text-center">
                {(((meta?.page || 0) - 1) * (meta?.size || 0)) + idx + 1}
              </TableCell>
              {headers.filter((item2) => item2.header !== 'ID').map((item2, idx2) => (
                <TableCell key={idx2}>
                  {item[item2.key]}
                </TableCell>
              ))}
              <TableCell className="text-center w-[100px]">
                <Button
                  variant="icon"
                  className="text-[#624de3]"
                  onClick={() => {
                    const id = item[`${headers.find((item2) => item2.header === 'ID')?.key}`] || null;
                    if (handleButtonAction) handleButtonAction('edit', id);
                  }}
                >
                  <FaRegEdit />
                </Button>
                <Button
                  variant="icon"
                  className="text-[#a30d11]"
                  onClick={() => {
                    const id = item[`${headers.find((item2) => item2.header === 'ID')?.key}`] || null;
                    if (handleDelete) handleDelete(id);
                  }}
                >
                  <FaRegTrashAlt />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {(data?.length || 0) <= 0 && (
        <div className="flex-1 flex justify-center">
          <div className="flex flex-col items-center gap-y-5 text-black/50">
            <div>
              <GrTableAdd size={40} />
            </div>
            <Label>
              Add data to see content
            </Label>
          </div>
        </div>
      )}
      <div className="mt-10">
        <Pagination
          count={meta?.total || 0}
          page={meta?.page}
          perPage={meta?.size}
          onPerPageChange={(size) => {
            if (handleChangeParams) handleChangeParams('size', size);
          }}
          onPageChange={(page) => {
            if (handleChangeParams) handleChangeParams('page', page);
          }}
        />
      </div>
    </div>
  );
};

export default TableDataUI;
