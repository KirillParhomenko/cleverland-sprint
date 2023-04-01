import { Fragment, useState, useContext, useEffect } from "react";

import cartContext from "../../store/cartContext";
import CartOrder from "./cartOrder/CartOrder";
import ActionNotification from "./../ActionNotification";

import classes from "./Cart.module.scss";
import emptyBox from "./../../assets/EmptyBox.png";
import orderedImg from "./../../assets/ordered.jpg";

const Cart = (props) => {
  const cartCtx = useContext(cartContext);

  return (
    <Fragment>
      <div className={classes["cart-wrapper"]}>
        <h1>Корзина</h1>
        {cartCtx.cartState === "EMPTY_ORDER" && (
          <ActionNotification
            imgUrl={emptyBox}
            title={"Корзина пустая"}
            text={"Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
            buttonText={"Вернуться назад"}
            isApply={false}
            onHideCart={props.hideCartHandler}
            wrapperStyles={{
              top: "40%",
              transform: "translate(0,-40%)",
              width: "70%",
            }}
          />
        )}
        {cartCtx.cartState === "APPLIED_ORDER" && (
          <ActionNotification
            imgUrl={orderedImg}
            title={"Заказ оформлен!"}
            text={"Ваш заказ #18 скоро будет передан курьерской доставке"}
            buttonText={"Вернуться назад"}
            isApply={false}
            onHideCart={props.hideCartHandler}
            wrapperStyles={{
              top: "40%",
              transform: "translate(0,-40%)",
              width: "70%",
            }}
          />
        )}
        {cartCtx.cartState === "AVAILABLE_ORDER" && <CartOrder />}
      </div>
    </Fragment>
  );
};

export default Cart;
