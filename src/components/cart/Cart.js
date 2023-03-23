import { Fragment } from "react";
import classes from "./Cart.module.scss";
import CartOrder from "./CartOrder";

const Cart = (props) => {
  return (
    <Fragment>
      <div className={classes["cart-wrapper"]}>
        <h1>Корзина</h1>
        <CartOrder/>
      </div>
    </Fragment>
  );
};

export default Cart;
