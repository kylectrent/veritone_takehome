import { Box, Stack, Typography, type BoxProps } from '@mui/material'
import { ShoppingItemListProvider } from '../../context/ShoppingItemListContext'
import VeritoneButton from '../VeritoneButton'
import ItemList from './ItemList';
import { useShoppingItemListModal } from '../../context/ShoppingItemListModalContext';

export interface ShoppingItemListProps extends BoxProps {}

function ShoppingItemList({ children, ...props }: ShoppingItemListProps) {
    const { setAddModalOpen } = useShoppingItemListModal();
    return (
        <ShoppingItemListProvider>
            <Box {...props} width={1025} pt={4}>
                <Stack direction={'row'} pb={1}>
                    <Typography variant={'Nunito18pxSemiBold'}>Your Items</Typography>
                    <VeritoneButton sx={{marginLeft: 'auto'}} onClick={() => setAddModalOpen(true)} >
                        <Typography variant={'veritoneNunitoSmall'}>Add Item</Typography>
                    </VeritoneButton>
                </Stack>
                {children}
            </Box>
        </ShoppingItemListProvider>
    )
}

ShoppingItemList.ItemList = ItemList;
export default ShoppingItemList