import ReactDom from 'react-dom/client'
import React from 'react'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Routes } from './provider/Route'

ReactDom.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={Routes} />
  </React.StrictMode>,
)
