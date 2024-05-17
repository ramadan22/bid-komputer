'use client';

import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';
import { messageError } from '../react-toastify';

import { ErrorConvertToMessage } from '@/helpers/handleResponseError';

type Props = {
  children?: React.ReactNode;
};

// let browserQueryClient: QueryClient | undefined;

// const makeQueryClient = () => new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: 6 * 1000,
//       refetchInterval: 6 * 1000,
//       retry: false,
//     },
//   },
//   queryCache: new QueryCache({
//     onError: (error) => {
//       const message = ErrorConvertToMessage(error);
//       console.log(message);
//       // messageError(ErrorConvertToMessage(error));
//     }
//   }),
// });

// const getQueryClient = () => {
//   if (typeof window === 'undefined') {
//     return makeQueryClient();
//   }

//   if (!browserQueryClient) browserQueryClient = makeQueryClient();

//   return browserQueryClient;
// };

const Providers = ({ children }: Props) => {
  // const queryClient = getQueryClient();
  const [queryClient] = useState(
    () => new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 6 * 1000,
          refetchInterval: 6 * 1000,
          retry: false,
        },
      },
      queryCache: new QueryCache({
        onError: (error) => {
          messageError(ErrorConvertToMessage(error));
        }
      }),
    }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  );
};

export default Providers;
