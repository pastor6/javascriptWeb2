import React from 'react';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Login from "./pages/Login";
import Menu from './pages/Menu';
import Registro from './pages/Registro';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/Menu",
    element: <Menu />,
  },
  {
    path: "/Registro",
    element: <Registro />,
  }
])                                                                        ;
function App() {
  return (
    <>
<RouterProvider router={router} />
    </>
  );
}

export default App
