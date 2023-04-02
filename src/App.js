import { useState, useEffect, useReducer } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import CartProvider from "./store/CartProvider";

import Wrapper from "./components/layout/wrappers/Wrapper";
import Header from "./components/header/Header";
import wrapperStyle from "./styles/Wrapper.module.scss";
import Banner from "./components/banner/Banner";
import Title from "./components/layout/title/Title";
import Input from "./components/searchBar/SearchBar";
import Sneakers from "./components/sneakers/Sneakers";
import Cart from "./components/cart/Cart";

import classes from "./App.module.scss";
import PopUpPortal from "./components/layout/portal/PopUpPortal";

import sneakerData from "./assets/sneakerData";
import Layout from "./components/layout/Layout";
import Main from "./pages/Main";
import Favourite from "./pages/Favourite";
import Purchases from "./pages/Purchases";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Main />} />
      <Route path="favourites" element={<Favourite />} />
      <Route path="purchase" element={<Purchases />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
