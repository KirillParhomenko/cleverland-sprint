import { Fragment } from "react";

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

function App() {
  return (
    <CartProvider>
      <Wrapper className={wrapperStyle["wrapper-content"]}>
        <Header />
        <main>
          <div className={wrapperStyle["wrapper-main"]}>
            <Banner />
            <section className={classes["section_title-search"]}>
              <Title>Все кроссовки</Title>
              <Input />
            </section>
            <section>
              <Sneakers />
            </section>
          </div>
        </main>
      </Wrapper>
      <Cart />
    </CartProvider>
  );
}

export default App;
