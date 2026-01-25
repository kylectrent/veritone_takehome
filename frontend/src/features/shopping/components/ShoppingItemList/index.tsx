import { Box, Stack, Typography, type BoxProps } from '@mui/material'
import { ShoppingItemListProvider } from '../../context/ShoppingItemListContext'
import VeritoneButton from '../VeritoneButton'
import ItemList from './ItemList';

export interface ShoppingItemListProps extends BoxProps { }

function ShoppingItemList({ children, ...props }: ShoppingItemListProps) {
    return (
        <ShoppingItemListProvider>
            <Box {...props}>
                <Stack direction={'row'}>
                    <Typography variant={'Nunito18pxSemiBold'}>Your Items</Typography>
                    <VeritoneButton>
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