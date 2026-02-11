import { createContext, useContext, useMemo, useState } from 'react';

type ShoppingItemListModalContextValue = {
    addModalOpen: boolean;
    openAddModal: () => void;
    closeAddModal: () => void;
};

const ShoppingItemListModalContext = createContext<ShoppingItemListModalContextValue | null>(null);

export function ShoppingItemListModalProvider({ children }: { children: React.ReactNode }) {
    const [addModalOpen, setAddModalOpen] = useState(false);

    const value = useMemo(
        () => ({
            addModalOpen,
            openAddModal: () => setAddModalOpen(true),
            closeAddModal: () => setAddModalOpen(false),
        }),
        [addModalOpen]
    );

    return (
        <ShoppingItemListModalContext.Provider value={value}>
            {children}
        </ShoppingItemListModalContext.Provider>
    );
}

export function useShoppingItemListModal() {
    const ctx = useContext(ShoppingItemListModalContext);
    if (!ctx) throw new Error('useShoppingItemListModal must be used within ShoppingItemListModalProvider');
    return ctx;
}
