import { AxiosError } from 'axios';

import { ResponseApiTypes } from '@/types/serviceApi';

const ErrorConvertToMessage = (paramError: unknown) => {
  const error = paramError as AxiosError<ResponseApiTypes>;

  const message = error.response?.data.message
    || (error.response?.data as { error?: string })?.error
    || `${error.name}: ${error?.message}`
    || `Error ${error.response?.status}: ${error.response?.statusText}`
    || 'Something wrong!';

  return message;
};

export {
  ErrorConvertToMessage
};
