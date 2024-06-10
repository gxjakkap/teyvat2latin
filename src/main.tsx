import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import IndexPage from './pages/index'
import CreditsPage from './pages/credits'
import MementoPage from './pages/memento'

import './index.css'

const router = createBrowserRouter([
  { path: '/', element: <IndexPage /> },
  { path: '/credits', element: <CreditsPage /> },
  { path: '/memento', element: <MementoPage /> }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
