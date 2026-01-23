import { Box } from '@mui/material';
import { useShoppingList } from './features/shopping/api/hooks'
import NavBar from './features/shopping/components/NavBar';

function App() {

  // call get api/shopping get and display list below
  const { items } = useShoppingList();

  console.log(items);

  return (
    <Box height={'100vh'}>
      <NavBar />
    </Box>
  )
}

export default App
