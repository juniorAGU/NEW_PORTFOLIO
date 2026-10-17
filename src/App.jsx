import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Mainlayout from './layout/Mainlayout'
import { Routes } from './Routes/Routes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Mainlayout />,
    children: Routes.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: <route.component/>
    }))
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
