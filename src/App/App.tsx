import React from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import Federalism from '../pages/federalism/Federalism';
import Home from '../pages/home/Home';

import './app.scss';

const routes = createRoutesFromElements(
  <Route path="/">
    <Route index element={<Home />} />
    <Route path="federalism" element={<Federalism />} />
  </Route>
)

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
