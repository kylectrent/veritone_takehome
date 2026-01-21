import { useMemo } from "react";
import type { ShoppingProductResponse } from "../../../api/model/shoppingProductResponse";
import { getGetAllVeritoneShoppingProductsQueryKey, useGetAllVeritoneShoppingProducts } from "../../../api/veritone-shopping-product-controller";


export function useShoppingList() {
    const q = useGetAllVeritoneShoppingProducts({
      query: {
        // small defaults that feel good in UI
        staleTime: 10_000,
        refetchOnWindowFocus: false,
      },
    });
  
    // Orval returns { data, status, headers }
    const items: ShoppingProductResponse[] = useMemo(() => {
      const payload = q.data?.data;
      return Array.isArray(payload) ? payload : [];
    }, [q.data?.data]);
  
    return {
      items,
      isLoading: q.isLoading,
      isFetching: q.isFetching,
      isError: q.isError,
      error: q.error,
      refetch: q.refetch,
      queryKey: getGetAllVeritoneShoppingProductsQueryKey(),
    };
  }