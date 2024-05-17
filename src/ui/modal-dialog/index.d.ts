export type Props = {
  open: boolean;
  title: string;
  description?: string;
  handleOpen: (open: boolean) => void;
  handleTrigger?: (value: boolean) => void;
}
