import { type ListItemProps, Box, IconButton, ListItem } from '@mui/material'
import type { ShoppingProductResponse } from '../../../../api/model';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

export interface ShoppingListItemProps extends ListItemProps {
  item: ShoppingProductResponse;
}

function ShoppingListItem({item, ...props}: ShoppingListItemProps) {
  return (
    <ListItem 
      disableGutters
      secondaryAction= {
        <Box>
          <IconButton>
            <EditOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <DeleteOutlineIcon fontSize="small" />
          </IconButton>
        </Box>
      }
      
      
      {...props}
    >
        
    </ListItem>
  )
}

export default ShoppingListItem