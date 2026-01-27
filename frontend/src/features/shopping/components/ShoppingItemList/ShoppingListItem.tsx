import { type ListItemProps, Box, Checkbox, IconButton, ListItem, ListItemText } from '@mui/material'
import type { ShoppingProductResponse } from '../../../../api/model';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export interface ShoppingListItemProps extends ListItemProps {
  item: ShoppingProductResponse;
}

// Checking the checkbox should trigger the edit mutation
function ShoppingListItem({ item, ...props }: ShoppingListItemProps) {
  return (
    <ListItem
      disableGutters
      secondaryAction={
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
        slotProps={{
          primary: { variant: 'veritoneNunitoMedium', component: 'span' },
          secondary: { variant: 'veritoneNunitoSmall', component: 'span', color: 'secondary.main' },
        }}
      />
    </ListItem>
  )
}

export default ShoppingListItem