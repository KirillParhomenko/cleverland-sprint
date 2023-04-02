import wrapperStyle from "./../styles/Wrapper.module.scss";
import Banner from "../components/banner/Banner";
import Title from "../components/layout/title/Title";
import SearchBar from "../components/searchBar/SearchBar";
import Sneakers from "../components/sneakers/Sneakers";

import sneakerData from "../assets/sneakerData";

import classes from "./../App.module.scss";

const Main = () => {
  return (
    <div className={wrapperStyle["wrapper-main"]}>
      <Banner />
      <section className={classes["section_title-search"]}>
        <Title>Все кроссовки</Title>
        <SearchBar data={sneakerData} />
      </section>
      <section>
        <Sneakers data={sneakerData} isButtonBuyAvailable={true} />
      </section>
    </div>
  );
};

export default Main;
