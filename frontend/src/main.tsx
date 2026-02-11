import { createRoot } from 'react-dom/client'
import { router } from './router.tsx';
import { RouterProvider } from 'react-router-dom';
import AppProviders from './AppProviders.tsx';

createRoot(document.getElementById('root')!).render(
  <AppProviders>
    <RouterProvider router={router} />
  </AppProviders>
)
