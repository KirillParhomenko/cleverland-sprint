import { Fragment, useContext, useState } from "react";

import OrderInfoLine from "./OrderInfoLine";
import Orders from "./Orders";

import cartContext from "../../../store/cartContext";
import ApplyRejectButton from "../../layout/button/ApplyRejectButton";
import countPrice from "../../../assets/countPrice";

import classes from "./CartOrder.module.scss";

const CartOrder = (props) => {
  const cartCtx = useContext(cartContext);
  const totalCost = cartCtx.totalCost;
  let totalCostStr = countPrice(totalCost.toString());
  let taxStr = countPrice((totalCost * 0.05).toFixed(2).toString());

  const applyOrderHandler = (event) => {
    event.preventDefault();
    cartCtx.applyOrder();
  };

  return (
    <form
      className={classes["cart-order_wrapper"]}
      onSubmit={applyOrderHandler}
    >
      <Orders />
      <div>
        <OrderInfoLine title={"Итого"} totalCost={totalCostStr} />
        <OrderInfoLine title={"Налог 5%"} totalCost={taxStr} />
        <ApplyRejectButton
          type={"submit"}
          width={"100%"}
          height={"3.5vw"}
          fontSize={"1.1vw"}
          text={"Оформить заказ"}
          isApply={true}
          onClick={() => {}}
        />
      </div>
    </form>
  );
};

export default CartOrder;
