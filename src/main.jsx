import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './routes/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
  </React.StrictMode>,
)
