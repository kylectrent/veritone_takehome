import { Box, Paper, Stack, type StackProps } from '@mui/material'
import type { ShoppingProductResponse } from '../../../../api/model';
import ShoppingListItem from './ShoppingListItem';

export interface ItemListProps extends StackProps {
  list: ShoppingProductResponse[];
}

function ItemList({ list, ...props }: ItemListProps) {
  return (
    <Stack {...props} gap={1}>
      {
        list.map((item) => (
          <Paper>
            <Box key={item.id}>
              <ShoppingListItem
                item={item}
              />
            </Box>
          </Paper>
        ))
      }
    </Stack>
  )
}

export default ItemList