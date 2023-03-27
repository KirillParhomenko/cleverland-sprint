import { useContext } from "react";

import cartContext from "../../../store/cartContext";

import classes from "./SneakerCart.module.scss";

import countPrice from "../../../assets/countPrice";

import SneakerBuy from "../../../assets/sneakerBuy";

const SneakerCart = (props) => {
  const sneakerCtx = useContext(cartContext);
  const finallPrice = countPrice(props.price.toString());

  const onRemoveSneaker = () => {
    sneakerCtx.removeItem(props.idInCart);
  };

  return (
    <div className={classes["sneaker-cart_wrapper"]}>
      <div className={classes["sneaker-cart_img-wrapper"]}>
        <img src={props.imageUrl} alt="" />
      </div>
      <div className={classes["sneaker-cart_info"]}>
        <div className={classes["sneaker-cart_info-name"]}>
          <p>{props.categorySex} Кроссовки</p>
          <p>{props.name} </p>
        </div>
        <p className={classes["sneaker-cart_info-price"]}>{finallPrice}</p>
      </div>
      <div className={classes["sneaker-cart_delete-item-wrapper"]}>
        <button type="button" onClick={onRemoveSneaker}>
          <SneakerBuy />
        </button>
      </div>
    </div>
  );
};

export default SneakerCart;
