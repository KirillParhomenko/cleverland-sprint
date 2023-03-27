import { useContext } from "react";

import cartContext from "../../../store/cartContext";

import classes from "./Sneaker.module.scss";

import countPrice from "../../../assets/countPrice";

import SneakerBuy from "../../../assets/sneakerBuy";
import SneakerReady from "../../../assets/sneakerReady";
import FavoutireLogo from "../../../assets/favourite_logo";

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

  const finallPrice = countPrice(props.price.toString());

  return (
    <div className={classes["sneaker_wrapper"]}>
      <button className={classes["sneaker_favourite"]}>
        <FavoutireLogo color={"#ECECEC"} />
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
        <button
          onClick={addSneakerHandler}
          className={props.isInCart && classes["sneaker_order-in-cart"]}
        >
          {props.isInCart ? <SneakerReady /> : <SneakerBuy />}
        </button>
      </div>
    </div>
  );
};

export default Sneaker;
