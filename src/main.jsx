import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import './index.css'
import { KioskProvider } from './context/KioskProvider'
import { OrderProvider } from './context/OrderProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <KioskProvider>
      <OrderProvider>
        <RouterProvider router={router} />
      </OrderProvider>
    </KioskProvider>
  </React.StrictMode>,
)
