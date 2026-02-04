import { useMemo } from "react";
import type { ShoppingProductResponse } from "../../../api/model/shoppingProductResponse";
import { getGetAllVeritoneShoppingProductsQueryKey, useCreateVeritoneShoppingProduct, useGetAllVeritoneShoppingProducts } from "../../../api/veritone-shopping-product-controller";
import { useQueryClient } from "@tanstack/react-query";
import type { ShoppingProductRequest } from "../../../api/model";


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

/**
* Create a shopping product and refresh the list on success.
* 
* Use an optimistic update
*/
export function useCreateShoppingProduct() {
  const queryClient = useQueryClient();

  const m = useCreateVeritoneShoppingProduct({
    mutation: {
      onSuccess: async () => {
        // refresh list everywhere
        await queryClient.invalidateQueries({
          queryKey: getGetAllVeritoneShoppingProductsQueryKey(),
        })
      }
    }
  });

  return {
    create: (data: ShoppingProductRequest) => m.mutate({ data }),
    createAsync: (data: ShoppingProductRequest) => m.mutateAsync({ data }),

    data: m.data?.data,
    status: m.status,
    isPending: m.isPending,
    isError: m.isError,
    error: m.error,
    reset: m.reset,
  }
}