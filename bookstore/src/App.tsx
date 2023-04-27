import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import Home from './pages/Home';
import Books from './pages/Books';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Registration from './pages/Registration';
import Login from './pages/Login';
import { RequireAuth } from 'react-auth-kit';


const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        index: true,
        path: "books",
        element: <Books />
      },
      {
        index: true,
        path: "registration",
        element: <Registration />
      },
      {
        index: true,
        path: "login",
        element: <Login />
      },
    ]
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;