import { Fragment, useContext } from "react";

import cartContext from "../../store/cartContext";
import CartOrder from "./cartOrder/CartOrder";
import CartExitInfo from "../layout/cart/CartExitInfo";

import classes from "./Cart.module.scss";
import emptyBox from "./../../assets/EmptyBox.png";

const Cart = (props) => {
  const isCartEmpty = useContext(cartContext).items.length !== 0;

  return (
    <Fragment>
      <div className={classes["cart-wrapper"]}>
        <h1>Корзина</h1>
        {isCartEmpty ? (
          <CartOrder hideCartHandler={props.hideCartHandler} />
        ) : (
          <CartExitInfo
            imgUrl={emptyBox}
            title={"Корзина пустая"}
            text={"Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
            buttonText={"Вернуться назад"}
            isApply={false}
            onHideCart={props.hideCartHandler}
          />
        )}
      </div>
    </Fragment>
  );
};

export default Cart;
