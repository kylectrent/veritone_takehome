import { Box } from '@mui/material';
import { useCreateShoppingProduct, useShoppingList } from './features/shopping/api/hooks'
import NavBar from './features/shopping/components/NavBar';
import EmptyCart from './features/shopping/components/EmptyCart';
import ShoppingItemList from './features/shopping/components/ShoppingItemList';
import ShoppingItemListModal from './features/shopping/components/ShoppingItemListModal';
import { useCallback, useMemo, useState } from 'react';
import { ShoppingItemListModalProvider } from './features/shopping/context/ShoppingItemListModalContext';
import type { ShoppingProductRequest } from './api/model';
import { ShoppingItemListProvider } from './features/shopping/context/ShoppingItemListContext';
import { ADD_FORM_ID } from './util/constants';

function App() {
  const [addModalOpen, setAddModalOpen] = useState(false)

  // call get api/shopping get and display list below
  const { items } = useShoppingList();

  const { createAsync } = useCreateShoppingProduct()

  const handleClose = useCallback(() => {
    setAddModalOpen(false)
  }, [setAddModalOpen])

  const ctxValue = useMemo(
    () => ({ addModalOpen, setAddModalOpen }),
    [addModalOpen],
  )

  const submitRequest = useCallback(
    (req: ShoppingProductRequest) => createAsync(req),
    [createAsync],
  )

  return (
    <ShoppingItemListProvider>
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
            formId={ADD_FORM_ID}
          >
            <ShoppingItemListModal.ShoppingItemListModalBody
              modalBodyHeader={'Add an item'}
              modalBodySubheader={'Add your new item below'}
              onSubmitRequest={submitRequest}
              onSuccess={handleClose}
              formId={ADD_FORM_ID}
            />
          </ShoppingItemListModal>
        </Box>
      </ShoppingItemListModalProvider>
    </ShoppingItemListProvider>
  )
}

export default App
