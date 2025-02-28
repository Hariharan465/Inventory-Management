import ReactDom from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Routes } from './provider/Route'
import { Provider } from 'react-redux'
import { store } from './provider/Store'
import { Toaster } from 'sonner'
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";

        

ReactDom.createRoot(document.getElementById('root')!).render(
  

    <PrimeReactProvider  >
    <Provider store={store}>
      <Toaster position='top-right' closeButton pauseWhenPageIsHidden />
    <RouterProvider router={Routes} />
    </Provider>
    </PrimeReactProvider>
  
)

