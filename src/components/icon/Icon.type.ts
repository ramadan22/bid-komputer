export type IconValueType =
  | 'Search'
  | 'Close'
  | 'ChevronDown'
  | 'Tokopedia'
  | 'Check';

export type IconType = {
  className?: string;
  type: IconValueType;
};
