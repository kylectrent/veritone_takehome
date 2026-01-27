import { Box } from '@mui/material';
import { useShoppingList } from './features/shopping/api/hooks'
import NavBar from './features/shopping/components/NavBar';
import EmptyCart from './features/shopping/components/EmptyCart';
import ShoppingItemList from './features/shopping/components/ShoppingItemList';

function App() {

  // call get api/shopping get and display list below
  const { items } = useShoppingList();

  console.log(items);

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
    </Box>
  )
}

export default App
