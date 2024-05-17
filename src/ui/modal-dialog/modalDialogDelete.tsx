'use client';

import Button from '@/components/button';
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle
} from '@/components/dialog';
import { Props } from '.';

const ModalDialogDeleteUI = ({
  open, title, description, handleOpen, handleTrigger
}: Props) => (
  <Dialog open={open} onOpenChange={(value) => handleOpen(value)}>
    <DialogContent className="bg-white">
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        {description && (
          <DialogDescription>{description}</DialogDescription>
        )}
      </DialogHeader>
      <div className="flex gap-x-2.5 justify-end [&>button]:w-20">
        <Button onClick={() => handleTrigger && handleTrigger(false)}>Close</Button>
        <Button onClick={() => handleTrigger && handleTrigger(true)} className="bg-red-500 text-white">Yes</Button>
      </div>
    </DialogContent>
  </Dialog>
);

export default ModalDialogDeleteUI;
