import { useFetch } from '@vueuse/core';
import type { IProductsResult, IProducts } from '@/types/products';

export const useProducts = (): IProductsResult => {
  const { isFetching, error, data } = useFetch<IProducts[]>(
    './src/mock/mockProducts.json',
  ).json();
  return {
    isFetching,
    error,
    data,
  };
};
