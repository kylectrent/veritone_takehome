import { type ListItemProps, Box, Checkbox, IconButton, ListItem, ListItemText } from '@mui/material'
import type { ShoppingProductResponse } from '../../../../api/model';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useShoppingItemList } from '../../context/ShoppingItemListContext';

export interface ShoppingListItemProps extends ListItemProps {
  item: ShoppingProductResponse;
}

// Checking the checkbox should trigger the edit mutation
function ShoppingListItem({item, ...props}: ShoppingListItemProps) {
  const { setEditingProduct } = useShoppingItemList();

  return (
    <ListItem 
      disableGutters
      secondaryAction= {
        <Box>
          <IconButton>
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <DeleteOutlineIcon fontSize="small" />
          </IconButton>
        </Box>
      }
      {...props}
    >
        <Checkbox
          checked={item.purchased}
        />
        <ListItemText
          primary={item.name ?? 'Unamed Item'}
          secondary={item.description ?? ''}
        />
    </ListItem>
  )
}

export default ShoppingListItem