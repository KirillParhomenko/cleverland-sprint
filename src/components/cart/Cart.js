import { Fragment, useContext } from "react";

import cartContext from "../../store/cartContext";

import classes from "./Cart.module.scss";
import CartEmpty from "./cartEmpty/CartEmpty";
import CartOrder from "./cartOrder/CartOrder";

const Cart = (props) => {
  const isCartEmpty = useContext(cartContext).items.length !== 0;

  return (
    <Fragment>
      <div className={classes["cart-wrapper"]}>
        <h1>Корзина</h1>
        {isCartEmpty ? <CartOrder /> : <CartEmpty/>}
      </div>
    </Fragment>
  );
};

export default Cart;
