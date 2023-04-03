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
import BurgerMenu from "../header/burgerMenu/BurgerMenu";

const Layout = () => {
  const [isCartActive, setIsCartActive] = useState(false);
  const [isBurgerMenuActive, setIsBurgerMenuActive] = useState(false);

  useEffect(() => {
    document.body.style.overflow =
      isCartActive || isBurgerMenuActive ? "hidden" : "";
  }, [isCartActive, isBurgerMenuActive]);

  const showCartHandler = () => {
    setIsCartActive(true);
  };

  const hideCartHandler = () => {
    setIsCartActive(false);
  };

  const burgerMenuToggle = () => {
    setIsBurgerMenuActive(!isBurgerMenuActive);
  };
  return (
    <CartProvider>
      <FavouriteProvider>
        <PurchasesProvider>
          <PopUpPortal
            isActive={isCartActive}
            isBackDropActive={true}
            hideHandler={hideCartHandler}
          >
            <Cart hideCartHandler={hideCartHandler} />
          </PopUpPortal>
          <PopUpPortal
            isActive={isBurgerMenuActive}
            isBackDropActive={false}
            hideHandler={() => {}}
          >
            <BurgerMenu />
          </PopUpPortal>
          <Wrapper className={wrapperStyle["wrapper-content"]}>
            <Header
              onShowCart={showCartHandler}
              isBurgerMenuActive={isBurgerMenuActive}
              burgerMenuToggle={burgerMenuToggle}
            />
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
