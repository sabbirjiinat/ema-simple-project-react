import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LayOut from './component/LayOut/LayOut'
import Shop from './component/Shop/Shop'
import Orders from './component/Orders/Orders'
import Inventory from './component/Inventory/Inventory'
import Login from './component/Login/Login'
import cardProductLoader from './loader/cardProductLoader'





const router = createBrowserRouter([
  {
    path: '/',
    element: <LayOut></LayOut>,
    children: [
      {
        path: '/',
        element:<Shop></Shop>
      },
      {
        path: 'orders',
        element: <Orders></Orders>,
        loader:cardProductLoader
      },
      {
        path: 'inventory',
        element:<Inventory></Inventory>
      },
      {
        path: 'login',
        element:<Login></Login>
      },
 
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
