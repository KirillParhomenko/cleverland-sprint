import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import wrapperStyle from "./../styles/Wrapper.module.scss";
import Title from "../components/layout/title/Title";
import Sneakers from "../components/sneakers/Sneakers";
import ActionNotification from "../components/ActionNotification";

import favouriteContext from "../store/favouriteContext";

import noFavouritesImage from "./../assets/noFavourites.png";

import classes from "./../App.module.scss";

const Favourite = () => {
  const favouriteCtx = useContext(favouriteContext);
  const navigate = useNavigate();
  return (
    <div className={wrapperStyle["wrapper-main"]}>
      <section className={classes["section_title-search"]}>
        <Title>Мои закладки</Title>
      </section>
      <section>
        {favouriteCtx.items.length === 0 && (
          <ActionNotification
            imgUrl={noFavouritesImage}
            title={"Закладок нету :("}
            text={"Вы ничего не добавили в закладки."}
            buttonText={"Вернуться назад"}
            isApply={false}
            onHideCart={() => {
              navigate(-1);
            }}
            wrapperStyles={{
              width: "25%",
              paddingTop: "10vh",
            }}
            imgStyles={{ width: "5vw" }}
          />
        )}
        {favouriteCtx.items.length !== 0 && (
          <Sneakers data={favouriteCtx.items} />
        )}
      </section>
    </div>
  );
};

export default Favourite;
