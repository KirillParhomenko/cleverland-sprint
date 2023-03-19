import { Fragment } from "react";

import Wrapper from "./components/layout/wrappers/Wrapper";
import Header from "./components/header/Header";

import "./App.module.scss";
import wrapperStyle from "./styles/MainWrapper.module.scss";
import Banner from "./components/banner/Banner";

function App() {
  return (
    <Wrapper className={wrapperStyle["wrapper-content"]}>
      <Header />
      <Banner />
    </Wrapper>
  );
}

export default App;
