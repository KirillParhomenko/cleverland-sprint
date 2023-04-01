import { useState, useEffect, useReducer, useContext } from "react";

import wrapperStyle from "./../styles/Wrapper.module.scss";
import Banner from "../components/banner/Banner";
import Title from "../components/layout/title/Title";
import Input from "../components/layout/input/Input";
import Sneakers from "../components/sneakers/Sneakers";

import sneakerData from "../assets/sneakerData";

import classes from "./../App.module.scss";

const Main = () => {
  return (
    <div className={wrapperStyle["wrapper-main"]}>
      <Banner />
      <section className={classes["section_title-search"]}>
        <Title>Все кроссовки</Title>
        <Input />
      </section>
      <section>
        <Sneakers data={sneakerData} />
      </section>
    </div>
  );
};

export default Main;
