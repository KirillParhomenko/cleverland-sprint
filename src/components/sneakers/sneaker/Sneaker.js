import { useContext } from "react";

import cartContext from "../../../store/cartContext";

import classes from "./Sneaker.module.scss";

import SneakerBuy from "../../../assets/sneakerBuy";
import FavoutireLogo from "../../../assets/favourite_logo";

const Sneaker = (props) => {
  const cartCtx = useContext(cartContext);

  const addSneakerHandler = () => {
    cartCtx.addItem({ id: props.id, name: props.name, price: props.price });
  };

  let strPrice = props.price + "";
  const finallPrice = `${
    strPrice.length > 3
      ? strPrice.slice(0, -3) + " " + strPrice.slice(-3)
      : strPrice
  } руб.`;

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
        <button onClick={addSneakerHandler}>
          <SneakerBuy />
        </button>
      </div>
    </div>
  );
};

export default Sneaker;
