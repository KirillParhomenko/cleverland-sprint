import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import CartProvider from "../../store/CartProvider";
import FavouriteProvider from "../../store/FavouriteProvider";
import Wrapper from "./wrappers/Wrapper";
import Header from "../header/Header";
import wrapperStyle from "./../../styles/Wrapper.module.scss";

import Cart from "../cart/Cart";

import PopUpPortal from "./portal/PopUpPortal";
import PurchasesProvider from "../../store/PurchasesProvider";

const Layout = () => {
  const [isCartActive, setIsCartActive] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isCartActive ? "hidden" : "";
  }, [isCartActive]);

  const showCartHandler = () => {
    setIsCartActive(true);
  };

  const hideCartHandler = () => {
    setIsCartActive(false);
  };
  return (
    <CartProvider>
      <FavouriteProvider>
        <PurchasesProvider>
          <PopUpPortal isActive={isCartActive} hideHandler={hideCartHandler}>
            <Cart hideCartHandler={hideCartHandler} />
          </PopUpPortal>
          <Wrapper className={wrapperStyle["wrapper-content"]}>
            <Header onShowCart={showCartHandler} />
            <main>
              <Outlet />
            </main>
          </Wrapper>
        </PurchasesProvider>
      </FavouriteProvider>
    </CartProvider>
  );
};

export default Layout;
