import type { ShoppingProductRequest } from "../../../api/model";

export type ShoppingProductSubmitFn = (data: ShoppingProductRequest) => Promise<unknown>