import { useContext } from "react";

import cartContext from "../../../store/cartContext";

import classes from "./Sneaker.module.scss";

import countPrice from "../../../assets/countPrice";

import SneakerBuy from "../../../assets/sneakerBuy";
import SneakerReady from "../../../assets/sneakerReady";
import FavoutireLogo from "../../../assets/favourite_logo";
import FavouriteLogoActive from "../../../assets/favourite_logo_active";

const Sneaker = (props) => {
  const cartCtx = useContext(cartContext);

  const addSneakerHandler = () => {
    cartCtx.addItem({
      id: props.id,
      idInCart: cartCtx.items.length + 1,
      categorySex: props.categorySex,
      imageUrl: props.imageUrl,
      name: props.name,
      price: props.price,
    });
  };

  const favouriteSneakerHandler = () => {
    if (
      props.favouriteSneakers.some((favSneaker) => favSneaker.id === props.id)
    ) {
      props.removeFavouriteSneaker(props.id);
    } else {
      props.addFavouriteSneaker(props.id);
    }
  };

  const finallPrice = countPrice(props.price.toString());

  return (
    <div className={classes["sneaker_wrapper"]}>
      <button
        className={`${classes["sneaker_favourite"]} ${
          props.isFavourite && classes["sneaker_favourite_active"]
        }`}
        onClick={favouriteSneakerHandler}
      >
        {props.isFavourite ? (
          <FavouriteLogoActive />
        ) : (
          <FavoutireLogo color={"#ECECEC"} />
        )}
      </button>
      <div className={classes["sneaker_img-wrapper"]}>
        <img src={props.imageUrl} />
      </div>
      <div className={classes["sneaker_title"]}>
        <p>
          {props.categorySex} Кроссовки {props.name}
        </p>
      </div>
      <div className={classes["sneaker_order-wrapper"]}>
        <div className={classes["sneaker_order-price"]}>
          <p>ЦЕНА:</p>
          <p>{finallPrice}</p>
        </div>
        {props.isButtonBuyAvailable && (
          <button
            onClick={addSneakerHandler}
            className={props.isInCart && classes["sneaker_order-in-cart"]}
          >
            {props.isInCart ? <SneakerReady /> : <SneakerBuy />}
          </button>
        )}
      </div>
    </div>
  );
};

export default Sneaker;
