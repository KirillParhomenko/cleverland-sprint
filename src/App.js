import { Fragment } from "react";

import Wrapper from "./components/layout/wrappers/Wrapper";
import Header from "./components/header/Header";
import wrapperStyle from "./styles/Wrapper.module.scss";
import Banner from "./components/banner/Banner";
import Title from "./components/layout/title/Title";

import classes from "./App.module.scss";
import Input from "./components/layout/input/Input";
import Sneaker from "./components/sneakers/sneaker/Sneaker";

function App() {
  return (
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
            <Sneaker />
          </section>
        </div>
      </main>
    </Wrapper>
  );
}

export default App;
