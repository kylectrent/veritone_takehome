import { StrictMode } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import theme from './theme/theme';
import { ShoppingItemListProvider } from './features/shopping/context/ShoppingItemListContext';
import { ShoppingItemListModalProvider } from './features/shopping/context/ShoppingItemListModalContext';

const queryClient = new QueryClient();

export default function AppProviders({ children }: { children: React.ReactNode }) {
    return (
        <StrictMode>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <ShoppingItemListProvider>
                        <ShoppingItemListModalProvider>
                            {children}
                        </ShoppingItemListModalProvider>
                    </ShoppingItemListProvider>
                </ThemeProvider>
            </QueryClientProvider>
        </StrictMode>
    );
}
