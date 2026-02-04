import { createContext, useContext, useMemo, useState } from "react";


type ShoppingItemListModalContextValue = {
    setAddModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    addModalOpen: boolean;
}

const ShoppingItemListModalContext = createContext<ShoppingItemListModalContextValue | null>(null);

export function ShoppingItemListModalProvider({
    children,
    value,
}: {
    children: React.ReactNode,
    value: ShoppingItemListModalContextValue,
}) {
    return (
        <ShoppingItemListModalContext.Provider value={value}>
            {children}
        </ShoppingItemListModalContext.Provider>
    )
}

export function useShoppingItemListModal() {
    const ctx = useContext(ShoppingItemListModalContext)
    if (!ctx) {
        throw new Error(
            'useShoppingItemListModal must be used within a ShoppingItemListModalProvider'
        )
    }
    return ctx
}
