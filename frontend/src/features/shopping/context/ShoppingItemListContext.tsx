import { createContext, useContext, useMemo, useState } from "react"
import type { ShoppingProductResponse } from "../../../api/model"


type ShoppingItemListContextValue = {
    editingProduct: ShoppingProductResponse | null
    setEditingProduct: React.Dispatch<
        React.SetStateAction<ShoppingProductResponse | null>
    >
    openEdit: (product: ShoppingProductResponse) => void
    closeEdit: () => void
}

const ShoppingItemListContext = createContext<ShoppingItemListContextValue | null>(
    null
)

export function ShoppingItemListProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const [editingProduct, setEditingProduct] =
        useState<ShoppingProductResponse | null>(null)

    const value = useMemo<ShoppingItemListContextValue>(
        () => ({
            editingProduct,
            setEditingProduct,
            openEdit: (product) => setEditingProduct(product),
            closeEdit: () => setEditingProduct(null),
        }),
        [editingProduct]
    )

    return (
        <ShoppingItemListContext.Provider value={value}>
            {children}
        </ShoppingItemListContext.Provider>
    )
}

export function useShoppingItemList() {
    const ctx = useContext(ShoppingItemListContext)
    if (!ctx) {
        throw new Error(
            'useShoppingItemList must be used within a ShoppingItemListProvider'
        )
    }
    return ctx
}