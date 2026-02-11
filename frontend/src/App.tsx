import { Box } from '@mui/material';
import { useCreateShoppingProduct, useShoppingList } from './features/shopping/api/hooks'
import NavBar from './features/shopping/components/NavBar';
import EmptyCart from './features/shopping/components/EmptyCart';
import ShoppingItemList from './features/shopping/components/ShoppingItemList';
import ShoppingItemListModal from './features/shopping/components/ShoppingItemListModal';
import { useCallback } from 'react';
import { useShoppingItemListModal } from './features/shopping/context/ShoppingItemListModalContext';
import type { ShoppingProductRequest } from './api/model';
import { useShoppingItemList } from './features/shopping/context/ShoppingItemListContext';
import { ADD_FORM_ID, EDIT_FORM_ID } from './util/constants';

function App() {

  // call get api/shopping get and display list below
  const { items } = useShoppingList();
  const { createAsync } = useCreateShoppingProduct();

  const { editingProduct, setEditingProduct } = useShoppingItemList();
  const { addModalOpen, closeAddModal } = useShoppingItemListModal();

  const closeEdit = useCallback(() => setEditingProduct(null), [setEditingProduct]);

  const submitAddRequest = useCallback(
    (req: ShoppingProductRequest) => createAsync(req),
    [createAsync],
  );

  const submitEditRequest = useCallback(
    async (req: ShoppingProductRequest) => {
      // you’ll implement update hook next
      return Promise.resolve();
    },
    []
  );

  return (
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
        onClose={closeAddModal}
        mutationActionTitle={'Add Task'}
        formId={ADD_FORM_ID}
      >
        <ShoppingItemListModal.ShoppingItemListModalBody
          modalBodyHeader={'Add an item'}
          modalBodySubheader={'Add your new item below'}
          onSubmitRequest={submitAddRequest}
          onSuccess={closeAddModal}
          formId={ADD_FORM_ID}
        />
      </ShoppingItemListModal>

      {/* Modal to edit an item to the cart */}
      <ShoppingItemListModal
        open={Boolean(editingProduct)}
        onClose={closeEdit}
        mutationActionTitle="Save Item"
        formId={EDIT_FORM_ID}
      >
        <ShoppingItemListModal.ShoppingItemListModalBody
          modalBodyHeader="Edit an item"
          modalBodySubheader="Edit your item below"
          editingProduct={editingProduct}
          onSubmitRequest={submitEditRequest}
          onSuccess={closeEdit}
          formId={EDIT_FORM_ID}
        />
      </ShoppingItemListModal>
    </Box>
  )
}

export default App
