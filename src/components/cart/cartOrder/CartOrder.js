import { useContext } from "react";

import OrderInfoLine from "./OrderInfoLine";
import Orders from "./Orders";

import cartContext from "../../../store/cartContext";
import ApplyRejectButton from "../../layout/button/ApplyRejectButton";
import countPrice from "../../../assets/countPrice";

import classes from "./CartOrder.module.scss";

const CartOrder = (props) => {
  const totalCost = useContext(cartContext).totalCost;

  let totalCostStr = countPrice(totalCost.toString());
  let taxStr = countPrice((totalCost * 0.05).toFixed(2).toString());

  return (
    <div className={classes["cart-order_wrapper"]}>
      <Orders />
      <div>
        <OrderInfoLine title={"Итого"} totalCost={totalCostStr} />
        <OrderInfoLine title={"Налог 5%"} totalCost={taxStr} />
        <ApplyRejectButton
          width={"100%"}
          height={"3.5vw"}
          fontSize={"1.1vw"}
          text={"Оформить заказ"}
          isApply={true}
        />
      </div>
    </div>
  );
};

export default CartOrder;
