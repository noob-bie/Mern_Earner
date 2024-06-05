import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";

function App() {

  const Layout = () => {
    return {
      <Navbar/>
      <Outlet/>
      <Footer/>
    }
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Home</div>,
    },
  ]);

  return (
    <>
      <div>
      <RouterProvider router={router} />
        
      </div>
        Hello!
    </>
  )
}

export default App
