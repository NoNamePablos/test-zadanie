import { useFetch } from '@vueuse/core';
import type { IProductsResult, IProducts } from '@/types/products';
import {reject} from "lodash";

export const useProducts = (): Promise<IProductsResult> => {
  const { isFetching, error, data } =  useFetch<IProducts[]>(
    './src/mock/mockProducts.json',
  ).json();
  return {
    isFetching,
    error,
    data,
  };
};
export const useFakeProduct=async()=>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 4000);
  });
}
