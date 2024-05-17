import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

import { defaultParams } from '@/data/constants';
import ProductsFeature from '@/features/products';
import { getProducts, queries } from '@/services/cms/products';

interface Props {
  searchParams: {
    page: number;
    size: number;
    keyword?: string;
  }
}

const ProductsPage = async ({ searchParams }: Props) => {
  const header = headers();
  const pathname = header.get('x-pathname');

  const queryClient = new QueryClient();

  if (!searchParams.page || !searchParams.size) {
    redirect(`${pathname}/?page=${defaultParams.page}&size=${defaultParams.size}`);
  }

  await queryClient.prefetchQuery({
    queryKey: [queries.GET_PRODUCTS, searchParams],
    queryFn: () => getProducts(searchParams),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductsFeature params={searchParams} />
    </HydrationBoundary>
  );
};

export default ProductsPage;
