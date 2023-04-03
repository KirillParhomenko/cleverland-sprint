import { useState } from "react";
import { useMatchMedia } from "../hooks";

import wrapperStyle from "./../styles/Wrapper.module.scss";
import Banner from "../components/banner/Banner";
import Title from "../components/layout/title/Title";
import SearchBar from "../components/searchBar/SearchBar";
import Sneakers from "../components/sneakers/Sneakers";

import sneakerData from "../assets/sneakerData";

import classes from "./../App.module.scss";

const Main = () => {
  const [sneakersRef, setSneakersRef] = useState([]);
  const { isMobile, isTablet, isDesktop } = useMatchMedia();

  const setSneakersRefHandler = (sneakerRefObj) => {
    setSneakersRef((prevState) => [...prevState, sneakerRefObj]);
  };

  return (
    <div className={wrapperStyle["wrapper-main"]}>
      {!isMobile && <Banner />}
      <section className={classes["section_title-search"]}>
        <Title>Все кроссовки</Title>
        <SearchBar data={sneakerData} sneakersRef={sneakersRef} />
      </section>
      <section>
        <Sneakers
          data={sneakerData}
          isButtonBuyAvailable={true}
          setSneakersRefHandler={setSneakersRefHandler}
        />
      </section>
    </div>
  );
};

export default Main;
