import { Fragment, useContext, useState } from "react";

import OrderInfoLine from "./OrderInfoLine";
import Orders from "./Orders";

import cartContext from "../../../store/cartContext";
import ApplyRejectButton from "../../layout/button/ApplyRejectButton";
import countPrice from "../../../assets/countPrice";
import CartExitInfo from "../../layout/cart/CartExitInfo";

import emptyBox from "./../../../assets/EmptyBox.png";

import classes from "./CartOrder.module.scss";

const CartOrder = (props) => {
  const [isOrderApplyed, setIsOrderApplyed] = useState(false);

  const totalCost = useContext(cartContext).totalCost;
  let totalCostStr = countPrice(totalCost.toString());
  let taxStr = countPrice((totalCost * 0.05).toFixed(2).toString());

  const applyOrderHandler = (event) => {
    event.preventDefault();
    setIsOrderApplyed(true);
  };

  return (
    <form
      className={classes["cart-order_wrapper"]}
      onSubmit={applyOrderHandler}
    >
      {!isOrderApplyed ? (
        <Fragment>
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
        </Fragment>
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
    </form>
  );
};

export default CartOrder;
