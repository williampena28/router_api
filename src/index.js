import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './pages/About/index.js';
import Dashboard from './pages/Dashboard/index.js';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import DisplayStock from './components/display_stock';
import { Link } from 'react'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Dashboard/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/stock/:symbol",
        element: <DisplayStock/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

// / - render dashboard
// /about - render about
// /stocks/:symbol - render a single stock


root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
