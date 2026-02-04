import { Box } from '@mui/material';
import { useShoppingList } from './features/shopping/api/hooks'
import NavBar from './features/shopping/components/NavBar';
import EmptyCart from './features/shopping/components/EmptyCart';
import ShoppingItemList from './features/shopping/components/ShoppingItemList';
import ShoppingItemListModal from './features/shopping/components/ShoppingItemListModal';
import { useCallback, useMemo, useState } from 'react';
import { ShoppingItemListModalProvider } from './features/shopping/context/ShoppingItemListModalContext';

function App() {
  const [addModalOpen, setAddModalOpen] = useState(false)

  // call get api/shopping get and display list below
  const { items } = useShoppingList();

  const handleClose = useCallback(() => {
    setAddModalOpen(false)
  }, [setAddModalOpen])

  const ctxValue = useMemo(
    () => ({ addModalOpen, setAddModalOpen }),
    [addModalOpen],
  )

  return (
    <ShoppingItemListModalProvider value={ctxValue}>
      <Box height={'100vh'}>
        <NavBar height={64} />
        <Box display={'flex'} justifyContent={'center'} >
          {
            items.length === 0 ?
              <EmptyCart mt={21.75} />
              :
              <ShoppingItemList>
                <ShoppingItemList.ItemList list={items} />
              </ShoppingItemList>
          }
        </Box>
        {/* Modal to add an item to the cart */}
        <ShoppingItemListModal
          open={addModalOpen}
          onClose={handleClose}
          mutationActionTitle={'Add Task'}
        >
          <ShoppingItemListModal.ShoppingItemListModalBody
            modalBodyHeader={'Add an item'}
            modalBodySubheader={'Add your new item below'}
          />
        </ShoppingItemListModal>
      </Box>
    </ShoppingItemListModalProvider>
  )
}

export default App
