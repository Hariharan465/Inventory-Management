import ReactDom from 'react-dom/client'
import React from 'react'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Routes } from './provider/Route'
import { Provider } from 'react-redux'
import { store } from './provider/Store'
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";

        

ReactDom.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <PrimeReactProvider >
    <Provider store={store}>
    <RouterProvider router={Routes} />
    </Provider>
    </PrimeReactProvider>
  </React.StrictMode>,
)

