import { useState, useEffect, useReducer } from "react";

import CartProvider from "./store/CartProvider";

import Wrapper from "./components/layout/wrappers/Wrapper";
import Header from "./components/header/Header";
import wrapperStyle from "./styles/Wrapper.module.scss";
import Banner from "./components/banner/Banner";
import Title from "./components/layout/title/Title";
import Input from "./components/layout/input/Input";
import Sneakers from "./components/sneakers/Sneakers";
import Cart from "./components/cart/Cart";

import classes from "./App.module.scss";
import PopUpPortal from "./components/layout/portal/PopUpPortal";

import sneakerData from "./assets/sneakerData";

function App() {
  const [isCartActive, setIsCartActive] = useState(false);
  const [favouriteSneakers, setFavouriteSneakers] = useState([]);

  useEffect(() => {
    document.body.style.overflow = isCartActive ? "hidden" : "";
  }, [isCartActive]);

  console.log(favouriteSneakers)

  const showCartHandler = () => {
    setIsCartActive(true);
  };

  const hideCartHandler = () => {
    setIsCartActive(false);
  };

  const addFavouriteSneakerHandler = (id) => {
    setFavouriteSneakers((prevState) => [
      ...prevState,
      sneakerData.find((sneaker) => sneaker.id === id),
    ]);
  };

  const removeFavouriteSneakerHandler = (id) => {
    setFavouriteSneakers((prevState) =>
      prevState.filter((sneaker) => sneaker.id !== id)
    );
  };
  return (
    <CartProvider>
      <PopUpPortal isActive={isCartActive} hideHandler={hideCartHandler}>
        <Cart hideCartHandler={hideCartHandler} />
      </PopUpPortal>
      <Wrapper className={wrapperStyle["wrapper-content"]}>
        <Header onShowCart={showCartHandler} />
        <main>
          <div className={wrapperStyle["wrapper-main"]}>
            <Banner />
            <section className={classes["section_title-search"]}>
              <Title>Все кроссовки</Title>
              <Input />
            </section>
            <section>
              <Sneakers
                favouriteSneakers={favouriteSneakers}
                addFavouriteSneakerHandler={addFavouriteSneakerHandler}
                removeFavouriteSneakerHandler={removeFavouriteSneakerHandler}
              />
            </section>
          </div>
        </main>
      </Wrapper>
    </CartProvider>
  );
}

export default App;
